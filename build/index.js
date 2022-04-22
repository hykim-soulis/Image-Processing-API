"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
exports.app = app;
var port = 3000;
app.use('/api/images', express_1.default.static('images'));
app.get('/', function (req, res) {
    res.send("Main");
});
app.use('/api', index_1.default);
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
