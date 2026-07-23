const request = require('supertest');
const app = require('../src/app');

test('GET / renvoie Hello CI/CD', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('Hello CI/CD !');
});
test('GET /bonjour renvoie Bonjour tout le monde', async () => {
  const res = await request(app).get('/bonjour');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('Bonjour tout le monde');
});
test('GET /health renvoie status ok', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});
