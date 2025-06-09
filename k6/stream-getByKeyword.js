import http from 'k6/http';
import { check, sleep } from 'k6';

const keywordList = [
    'Minecraft',
    'Exploring',
    'Building',
    'Decorating',
    'Bob',
    'Patricia',
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
  const keyword = keywordList[Math.floor(Math.random() * keywordList.length)];
  const result = http.get(`https://local.pibbletv.com/api/stream/getPerKeyword?keyword=${keyword}`);
  check(result, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1); 
}