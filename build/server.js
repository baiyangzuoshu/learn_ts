"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiGetPosts_1 = require("./api/posts/apiGetPosts");
const apiGetDetail_1 = require("./api/posts/apiGetDetail");
const apiCreatePost_1 = require("./api/posts/apiCreatePost");
const body_parser_1 = __importDefault(require("body-parser"));
const apiDeleteDetail_1 = require("./api/posts/apiDeleteDetail");
const path_1 = __importDefault(require("path"));
const apiUploadImage_1 = require("./api/posts/apiUploadImage");
const errorHandler_1 = require("./api/general/errorHandler");
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/static', express_1.default.static(path_1.default.resolve('./', 'public', 'img')));
app.use(errorHandler_1.apiErrorHandler);
const authenticator = (req, res, next) => {
    const username = 'maomao';
    req.user = username;
    next();
};
const logger = (req, res, next) => {
    console.log(`${req.user},${new Date()}-${req.method}-Request to` + req.path);
    next();
};
app.use(logger);
app.use(authenticator);
app.get('/', (req, res, next) => {
    res.send(`hello learn ts...`);
});
app.get('/posts', apiGetPosts_1.apiGetPosts);
app.delete('/posts/:id', apiDeleteDetail_1.apiDeleteDetail);
app.post('/posts/:id', apiGetDetail_1.apiGetDetail);
app.post('/posts', apiCreatePost_1.apiCreatePost);
app.post('/posts/:id/img', apiUploadImage_1.apiUploadImage);
app.listen(process.env.PORT || '8091', () => {
    console.log(`listen  port 8091`);
});
