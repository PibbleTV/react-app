import http from 'k6/http';
import { check, sleep } from 'k6';

const userNames = [
  'alice_example',
  'samantha_example',
  'patricia_example',
  'benson_example',
  'bob_example',
];

export const options = {
  stages: [
    { duration: '30s', target: 30 }, 
    { duration: '1m', target: 50 }, 
    { duration: '30s', target: 0 },  
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], 
    http_req_failed: ['rate<0.01'], 
  },
};

export default function () {

  const username = userNames[Math.floor(Math.random() * userNames.length)];
  const result = http.get(`https://local.pibbletv.com/api/user/getUser?username=${username}`);

  check(result, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}