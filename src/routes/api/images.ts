import express, { Request, Response } from 'express';
import { showImage } from '../../utilities/middleware';
import path from 'path';

const images = express.Router();

images.get(`/`, showImage, (req: Request, res: Response): void => {
  res.sendFile(
    path.join(
      __dirname,
      `../../../images/thumbnails/${req.query.fileName}-${req.query.width}x${req.query.height}.jpg`
    )
  );
});

export default images;
