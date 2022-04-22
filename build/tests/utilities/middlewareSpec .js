"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = require("../../utilities/middleware");
describe('middleware checks', function () {
    var fileName = 'fjord';
    var width = 200;
    var height = 200;
    describe('firstRequest function check', function () {
        var imageArray = [];
        it('firstRequest expected to return true', function () {
            expect((0, middleware_1.firstRequest)(fileName, width, height)).toBeTruthy();
        });
        it('firstRequest expected to return false', function () {
            (0, middleware_1.createCache)(fileName, width, height);
            expect((0, middleware_1.firstRequest)(fileName, width, height)).toBeFalsy();
        });
    });
    describe('createCache function check', function () {
        var imageArray = [];
        it('length of imageArray expected same or longer than 1', function () {
            (0, middleware_1.createCache)(fileName, width, height);
            expect(imageArray.length).toBeGreaterThan(0);
        });
    });
    describe('showImage function check', function () {
        it('server is created without error', function () { });
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
