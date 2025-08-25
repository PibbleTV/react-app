import http from 'k6/http';
import { check, sleep } from 'k6';

const streamIds = [
    '3aa92f8e-2d9d-4aa5-b4f3-a7c472198acd',
    '23c79c71-1a77-4e33-8729-37902fa994f0',
    '7e201b6c-d25b-4dc2-a9d7-25a3c6a4f155',
    'ae3875b0-41d3-4a64-b2f5-e2d3e7e8ff21',
    'aef492e1-e458-4684-a0e6-bf6e85ce0294',
  ];
  

export const options = {
  stages: [
    { duration: '15s', target: 5 },
    { duration: '30s', target: 15 },
    { duration: '1m', target: 30 },
    { duration: '15s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], 
    http_req_failed: ['rate<0.01'], 
  },
};

export default function () {
  const idToUse = streamIds[Math.floor(Math.random() * streamIds.length)];
  const result = http.get(`https://gateway.24.144.77.108.nip.io/stream/getStream?streamId=${idToUse}`);
  check(result, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1); 
}