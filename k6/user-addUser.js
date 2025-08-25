import http from 'k6/http';
import { check } from 'k6';


export const options = {
  stages: [
    { duration: '15s', target: 5 },
    { duration: '30s', target: 15 },
    { duration: '1m', target: 25 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {

  const userName = `${timestamp}${__ITER}`;

  const res = http.post(`https://gateway.24.144.77.108.nip.io/user/addUser?username=${userName}`);

  check(res, {
    'status is 200 or 204': (r) => r.status === 200 || r.status === 204,
  });

  sleep(1);
}
