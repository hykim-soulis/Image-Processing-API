import supertest from 'supertest';
import { firstRequest, createCache, showImage } from '../utilities/middleware';
import { app } from '../index';

const request = supertest(app);

describe('server checks', () => {
  it('server is created without error', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
  it('route is created without error', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
  it('image API moved permanently', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(301);
  });
  it('image API moved permanently', async () => {
    const response = await request.get(
      '/api/images?fileName=fjord&width=200&height=200'
    );
    expect(response.status).toBe(301);
  });
});
