import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '15s', target: 20 },
    { duration: '30s', target: 50 },
    { duration: '1m', target: 75 },
    { duration: '30s', target: 100 },
    { duration: '15s', target: 50 },
    { duration: '15s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'], 
    http_req_failed: ['rate<0.01'], 
  },
};

export default function () {
  const result = http.get(`https://gateway.24.144.77.108.nip.io/stream/getAll`);
  check(result, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1); 
}