"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showImage = exports.createCache = exports.firstRequest = void 0;
var sharp_1 = __importDefault(require("sharp"));
var imageArray = [];
function firstRequest(fileName, width, height) {
    return (imageArray
        .map(function (el) {
        return el.fileName === fileName && el.width === width && el.height === height;
    })
        .indexOf(true) === -1);
}
exports.firstRequest = firstRequest;
function createCache(fileName, width, height) {
    var resizedImage = { fileName: fileName, width: width, height: height };
    imageArray.push(resizedImage);
}
exports.createCache = createCache;
function showImage(req, res, next) {
    var fileName = req.query.fileName;
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    if (fileName && width && height) {
        if (firstRequest(fileName, width, height)) {
            (0, sharp_1.default)("./images/full/".concat(fileName, ".jpg"))
                .resize(width, height)
                .toFile("./images/thumbnails/".concat(fileName, "-").concat(width, "x").concat(height, ".jpg"))
                .then(function () { return next(); });
            createCache(fileName, width, height);
            return;
        }
        next();
        return;
    }
    res.send('Do not have image information');
}
exports.showImage = showImage;
