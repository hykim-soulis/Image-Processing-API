"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp = require('sharp');
var path = require('path');
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send("Main");
});
app.get('/api', function (req, res) {
    res.send('API here');
});
// Reverse of What I have to do - working!
app.get("/api/images?filename=palmtunnel&width=200&height=200", function (req, res) {
    res.send('image processing!');
    sharp("./images/full/palmtunnel.jpg")
        .resize(200, 200)
        .toFile("./images/thumbnails/palmtunnel-thumb.jpg");
});
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
