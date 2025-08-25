import http from 'k6/http';
import { check, sleep } from 'k6';

const userIds = [
    'd290f1ee-6c54-4b01-90e6-d701748f0851',
    '1c6e9b74-5df2-4b6e-8e1d-238d2b6f88ad',
    'a87e85b1-4c8f-4f9c-9d71-13e784a394f8',
    '3a5b1b25-22f2-4b2b-8b32-6f1a24e43e7c',
    'f4c6f953-9d5d-4d91-92bc-75f4ec97b77d',
  ];
  

export const options = {
  stages: [
    { duration: '15s', target: 20 },
    { duration: '30s', target: 50 },
    { duration: '1m', target: 75 },
    { duration: '15s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'], 
    http_req_failed: ['rate<0.01'], 
  },
};

export default function () {
  const idToUse = userIds[Math.floor(Math.random() * userIds.length)];
  const result = http.get(`https://gateway.24.144.77.108.nip.io/donations/getDonations?userId=${idToUse}`);
  check(result, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1); 
}
