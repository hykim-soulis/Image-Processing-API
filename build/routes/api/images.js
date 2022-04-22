"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp = require('sharp');
var images = express_1.default.Router();
var imageArray = [];
images.get("/", function (req, res) {
    var fileName = req.query.fileName;
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    if (fileName && width && height) {
        if (imageArray
            .map(function (el) {
            return el.fileName === fileName &&
                el.width === width &&
                el.height === height;
        })
            .indexOf(true) === -1) {
            // Resize image and display
            sharp("./images/full/".concat(fileName, ".jpg"))
                .resize(width, height)
                .toFile("./images/thumbnails/".concat(fileName, "-").concat(width, "x").concat(height, ".jpg"))
                .then(function () {
                res.sendFile('http://localhost:3000/api/images/?fileName=fjord&width=200&height=200');
                res.send("<img src=\"http://localhost:3000/api/images/thumbnails/".concat(fileName, "-").concat(width, "x").concat(height, ".jpg\">"));
            });
            var resizedImage = {
                fileName: req.query.fileName,
                width: Number(req.query.width),
                height: Number(req.query.height),
            };
            imageArray.push(resizedImage);
            console.log('run if!');
        }
        else {
            res.send("<img src=\"http://localhost:3000/api/images/thumbnails/".concat(fileName, "-").concat(width, "x").concat(height, ".jpg\">\n        <img src=\"http://localhost:3000/api/images/?fileName=fjord&width=200&height=200\">"));
            console.log('run else!');
        }
        console.log(imageArray);
        return;
    }
    res.send('Do not have image information');
});
exports.default = images;
