"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiDeleteDetail = (req, res) => {
    const postIndex = data_1.DataStore.posts.findIndex((item) => item.id == req.params.id);
    console.log(postIndex);
    if (postIndex > -1) {
        data_1.DataStore.posts.splice(postIndex, 1);
        res.status(200).json(`delete successed:${req.params.id}`);
    }
    else {
        res.send(`not found:${req.params.id}`);
    }
};
