import express, { Request, Response } from 'express';
import showImage from '../../utilities/middleware';

const images = express.Router();

images.get(`/`, showImage, (req: Request, res: Response): void => {
  res.sendFile(
    `C:/Study/Backend/Full Stack JavaScript Developer/1. Backend Development with Node/!ImageProcessingAPI/images/thumbnails/${req.query.fileName}-${req.query.width}x${req.query.height}.jpg`
  );
});

export default images;
