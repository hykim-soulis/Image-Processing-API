import {
  firstRequest,
  createCache,
  showImage
} from '../../utilities/middleware';

describe('middleware checks', () => {
  const fileName = 'fjord';
  const width = 200;
  const height = 200;
  describe('firstRequest function check', () => {
    const imageArray = [];
    it('firstRequest expected to return true', () => {
      expect(firstRequest(fileName, width, height)).toBeTruthy();
    });
    it('firstRequest expected to return false', () => {
      createCache(fileName, width, height);
      expect(firstRequest(fileName, width, height)).toBeFalsy();
    });
  });
  describe('createCache function check', () => {
    const imageArray = [];
    it('length of imageArray expected same or longer than 1', () => {
      createCache(fileName, width, height);
      expect(imageArray.length).toBeGreaterThan(0);
    });
  });
  describe('showImage function check', () => {
    it('server is created without error', () => {});
  });
});

// function firstRequest(
//   fileName: string,
//   width: number,
//   height: number
// ): boolean {
//   return (
//     imageArray
//       .map(
//         (el) =>
//           el.fileName === fileName && el.width === width && el.height === height
//       )
//       .indexOf(true) === -1
//   );
// }

// function createCache(fileName: string, width: number, height: number): void {
//   const resizedImage: ResizedImages = { fileName, width, height };
//   imageArray.push(resizedImage);
// }

// function showImage(req: Request, res: Response, next: NextFunction) {
//   const fileName: string | undefined = req.query.fileName as string | undefined;
//   const width = Number(req.query.width);
//   const height = Number(req.query.height);
//   if (fileName && width && height) {
//     if (firstRequest(fileName, width, height)) {
//       sharp(`./images/full/${fileName}.jpg`)
//         .resize(width, height)
//         .toFile(`./images/thumbnails/${fileName}-${width}x${height}.jpg`)
//         .then(() => next());
//       createCache(fileName, width, height);
//       return;
//     }
//     next();
//     return;
//   }
//   res.send('Do not have image information');
// }
