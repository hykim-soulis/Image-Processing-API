import express, { Express, Request, Response } from 'express';
const sharp = require('sharp');

const images = express.Router();

interface ResizedImages {
  fileName: string | undefined;
  width: number;
  height: number;
}
const imageArray: ResizedImages[] = [];

images.get(`/`, (req: Request, res: Response): void => {
  const fileName: string | undefined = req.query.fileName as string | undefined;
  const width: number = Number(req.query.width);
  const height: number = Number(req.query.height);

  if (fileName && width && height) {
    if (
      imageArray
        .map(
          (el) =>
            el.fileName === fileName &&
            el.width === width &&
            el.height === height
        )
        .indexOf(true) === -1
    ) {
      // Resize image and display
      sharp(`./images/full/${fileName}.jpg`)
        .resize(width, height)
        .toFile(`./images/thumbnails/${fileName}-${width}x${height}.jpg`)
        .then(() => {
          res.sendFile(
            `C:/Study/Backend/Full Stack JavaScript Developer/1. Backend Development with Node/!ImageProcessingAPI/images/thumbnails/${fileName}-${width}x${height}.jpg`
          );
        });
      const resizedImage: ResizedImages = {
        fileName: req.query.fileName as string | undefined,
        width: Number(req.query.width),
        height: Number(req.query.height),
      };
      imageArray.push(resizedImage);
    } else {
      res.sendFile(
        `C:/Study/Backend/Full Stack JavaScript Developer/1. Backend Development with Node/!ImageProcessingAPI/images/thumbnails/${fileName}-${width}x${height}.jpg`
      );
    }
    return;
  }
  res.send('Do not have image information');
});

export default images;
