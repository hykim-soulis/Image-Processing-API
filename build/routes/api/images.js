"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middleware_1 = require("../../utilities/middleware");
var path_1 = __importDefault(require("path"));
var images = express_1.default.Router();
images.get("/", middleware_1.showImage, function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../../../images/thumbnails/".concat(req.query.fileName, "-").concat(req.query.width, "x").concat(req.query.height, ".jpg")));
});
exports.default = images;
