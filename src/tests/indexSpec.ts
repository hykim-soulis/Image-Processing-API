import supertest from 'supertest';
import { app } from '../index';
import { ResizedImages } from '../utilities/middleware';

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

import { firstRequest, createCache, showImage } from '../utilities/middleware';

describe('middleware checks', () => {
  const fileName = 'fjord';
  const width = 200;
  const height = 200;
  describe('firstRequest function check', () => {
    const imageArray: ResizedImages[] = [];
    it('firstRequest expected to return true', () => {
      expect(firstRequest(fileName, width, height)).toBeTruthy();
    });
    it('firstRequest expected to return false', () => {
      createCache(fileName, width, height);
      expect(firstRequest(fileName, width, height)).toBeFalsy();
    });
  });
});
