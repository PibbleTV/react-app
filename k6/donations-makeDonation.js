import http from 'k6/http';
import { check, sleep } from 'k6';

const userIds = [
  '0df38ff9-8842-4892-98d2-f19e6cb5f89a',
  '1a7b6c20-5f51-4d9f-91f6-cae1a7e3e4a7',
  '2c45f367-9b22-4ef3-9821-33f6c19f2321',
  '3e6d4f71-1a31-472c-b128-57e3ea1188a2',
  '9a2ce327-d55d-44d7-a7a1-35c8d4462c26',
];

function getTwoDifferentRandomIds() {
  const shuffled = userIds.sort(() => 0.5 - Math.random());
  return [shuffled[0], shuffled[1]];
}

export const options = {
  stages: [
    { duration: '15s', target: 15 },
    { duration: '1m', target: 30 },
    { duration: '15s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const [donorId, receiverId] = getTwoDifferentRandomIds();

  const url = `https://gateway.24.144.77.108.nip.io/donations/makeDonation`;

  const payload = JSON.stringify({
    donorId,
    receiverId,
    donationAmount: Math.floor(Math.random() * 100) + 1,
    donationMessage: 'Great stream!',
    donatedAt: new Date().toISOString(),
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

