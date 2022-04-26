import supertest from 'supertest';
import path from 'path';
import { Request, Response } from 'express';
import { app } from '../index';
import {
  imageArray,
  firstRequest,
  createCache,
  showImage
} from '../utilities/middleware';

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
    expect(response.status).toBe(200);
  });
  it('image API moved permanently', async () => {
    const response = await request.get(
      '/api/images?fileName=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
});

describe('middleware checks', () => {
  const fileName = 'fjord';
  const width = 200;

  describe('firstRequest function check', () => {
    const height = 200;
    it('firstRequest expected to return true', () => {
      if (imageArray === [])
        expect(firstRequest(fileName, width, height)).toBeTruthy();
    });
    it('firstRequest expected to return false', () => {
      createCache(fileName, width, height);
      expect(firstRequest(fileName, width, height)).toBeFalsy();
    });
  });
  describe('showImage function check', () => {
    it('showImage should throw error', () => {
      expect(
        app.get(
          `/api/images`,
          showImage,
          (req: Request, res: Response): void => {
            res.sendFile(
              path.join(
                __dirname,
                `../../../images/thumbnails/${req.query.fileName}-${req.query.width}x${req.query.height}.jpg`
              )
            );
          }
        )
      ).toThrowError();
    });
  });
});
