"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middleware_1 = require("../../utilities/middleware");
var images = express_1.default.Router();
images.get("/", middleware_1.showImage, function (req, res) {
    res.sendFile("C:/Study/Backend/Full Stack JavaScript Developer/1. Backend Development with Node/!ImageProcessingAPI/images/thumbnails/".concat(req.query.fileName, "-").concat(req.query.width, "x").concat(req.query.height, ".jpg"));
});
exports.default = images;
