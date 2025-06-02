import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 }, // Ramp up to 10 users over 30 seconds
    { duration: '1m', target: 10 },  // Stay at 10 users for 1 minute
    { duration: '30s', target: 0 },  // Ramp down to 0 users over 30 seconds
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should complete in <500ms
    http_req_failed: ['rate<0.01'],   // Error rate should be <1%
  },
};

export default function () {
  const result = http.get('https://local.pibbletv.com/api/category/getAll');
  check(result, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1); // Pause 1 second between requests to simulate realistic user behavior
}