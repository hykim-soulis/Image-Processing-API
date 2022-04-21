"use strict";
// import express from 'express';
// const images = express.Router();
// const sharp = require('sharp');
// // Static files
// // Reverse of What I have to do
// // app.get(`/filename=${fileName}&width=${width}&height=${height}`, (req, res) => {
// //   res.send('image processing!');
// //   sharp(`./images/full/${fileName}.jpg`)
// //     .resize(width, height)
// //     .toFile(`./images/thumbnails/${fileName}-thumb.jpg`);
// // });
// images.get('/', sizing, (req, res) => {
//   res.send(
//     `<h1 style="color:blue;text-align:center;">image processing! => Images Page: ${req.query.fileName} Image width: ${req.query.width} Image height: ${req.query.height}</h1>
//     <img src="../../../images/full/fjord.jpg" alt="fjord" width="200" height="200">`
//   );
//   //
// });
// function sizing(
//   req: express.Request,
//   res: express.Response,
//   next: express.NextFunction
// ) {
//   if (req.query.fileName && req.query.width && req.query.height) {
//     console.log('Image size processing');
//     sharp(`../../../images/full/fjord.jpg`)
//       .resize(200, 200)
//       .toFile(`../../../images/thumbnails/fjord-thumb.jpg`);
//     next();
//     return;
//   }
//   res.send('No information');
// }
// export default images;
