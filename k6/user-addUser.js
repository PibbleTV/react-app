import http from 'k6/http';
import { check } from 'k6';


export const options = {
  stages: [
    { duration: '15s', target: 20 },
    { duration: '30s', target: 50 },
    { duration: '1m', target: 75 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {

  const userTag = __VU * 10000 + __ITER; 
  const userName = `test${userTag}`;

  const url = `https://local.pibbletv.com/api/user/addUser`;

  const payload = JSON.stringify({
    userName
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status is 200 or 204': (r) => r.status === 200 || r.status === 204,
  });

  sleep(1);
}
