"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCheckPostFilter = (req, res, next) => {
    console.log(`aipCheckPostFilter:${req.query}`);
    next();
};
