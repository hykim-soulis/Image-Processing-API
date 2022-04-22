import express, { Request, Response } from 'express';
import images from './api/images';
const route = express.Router();

route.get('/', (req: Request, res: Response) => {
  res.send(`API`);
});

route.use('/images', images);

export default route;
