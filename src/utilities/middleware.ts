import { NextFunction, Request, Response } from 'express';
const sharp = require('sharp');

const imageArray: ResizedImages[] = [];
interface ResizedImages {
  fileName: string | undefined;
  width: number;
  height: number;
}

function firstRequest(
  fileName: string,
  width: number,
  height: number
): boolean {
  return (
    imageArray
      .map(
        (el) =>
          el.fileName === fileName && el.width === width && el.height === height
      )
      .indexOf(true) === -1
  );
}

function createCache(fileName: string, width: number, height: number): void {
  const resizedImage: ResizedImages = { fileName, width, height };
  imageArray.push(resizedImage);
}

function showImage(req: Request, res: Response, next: NextFunction) {
  const fileName: string | undefined = req.query.fileName as string | undefined;
  const width: number = Number(req.query.width);
  const height: number = Number(req.query.height);
  if (fileName && width && height) {
    if (firstRequest(fileName, width, height)) {
      sharp(`./images/full/${fileName}.jpg`)
        .resize(width, height)
        .toFile(`./images/thumbnails/${fileName}-${width}x${height}.jpg`)
        .then(() => next());
      createCache(fileName, width, height);
      return;
    }
    next();
    return;
  }
  res.send('Do not have image information');
}

export default showImage;
