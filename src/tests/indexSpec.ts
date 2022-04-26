import supertest from 'supertest';
import { app } from '../index';
import { ResizedImages } from '../utilities/middleware';
import { Express, NextFunction, Request, Response } from 'express';

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

  describe('firstRequest function check', () => {
    const height = 200;
    const imageArray: ResizedImages[] = [];
    it('firstRequest expected to return true', () => {
      expect(firstRequest(fileName, width, height)).toBeTruthy();
    });
    it('firstRequest expected to return false', () => {
      createCache(fileName, width, height);
      expect(firstRequest(fileName, width, height)).toBeFalsy();
    });
  });
  describe('showImage function check', () => {
    const height = null;
    it('showImage should throw error', () => {
      expect(
        app.get(
          `/api/images`,
          showImage,
          (req: Request, res: Response): void => {
            res.sendFile(
              `C:/Study/Backend/Full Stack JavaScript Developer/1. Backend Development with Node/!ImageProcessingAPI/images/thumbnails/${req.query.fileName}-${req.query.width}x${req.query.height}.jpg`
            );
          }
        )
      ).toThrowError();
    });
  });
});
