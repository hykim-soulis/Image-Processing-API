"use strict";
// import express from 'express';
// const sharp = require('sharp');
// // import routes from './routes/index';
// import { promises as fsPromises } from 'fs';
// // const path = require('path');
// // const sharp = require('sharp');
// // The link I should use for the project
// // /api/images?filename=fjord&width=200&height=200
// // Reverse of What I have to do - working!
// // app.get(`api/filename=palmtunnel&width=200&height=200`, (req, res) => {
// //   res.send('image processing!');
// //   sharp(`./images/full/palmtunnel.jpg`)
// //     .resize(200, 200)
// //     .toFile(`./images/thumbnails/palmtunnel-thumb.jpg`);
// // });
// // Static files
// // app.use('/api/images', express.static('images'));
// const app = express();
// const port = 3000;
// app.get('/api', (req, res) => {
//   console.log('API page');
//   res.send('API Page');
// });
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
// });
// // To check whether  Jasmine work or not
// app.get('/multiply', (req, res) => {
//   res.send(`Multiply route is working: 4 x 6 = ${multiply(4, 6)}`);
// });
// const multiply = (num1: number, num2: number): number => {
//   return num1 * num2;
// };
// export default multiply;
// sharp('input.jpg')
//   .resize(300, 200)
//   .toFile('output.jpg', function (err: string) {
//     console.log(err);
//   });
