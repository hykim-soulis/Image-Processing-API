import express from 'express';
import images from './api/images';
const route = express.Router();

route.get('/', (req, res) => {
  res.send(`API`);
});

route.use('/images', images);

export default route;
