"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var trip_1 = __importDefault(require("./routes/trip"));
var app = express_1.default();
// middleware for body parts
app.use(body_parser_1.json());
// registered api
app.use('/trip', trip_1.default);
// middleware for error
app.use(function (err, req, res, next) {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
