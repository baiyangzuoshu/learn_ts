"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const static_1 = require("../general/static");
exports.apiUploadImage = (req, res) => {
    const postIndex = data_1.DataStore.posts.findIndex((item) => item.id == req.params.id);
    if (postIndex > -1) {
        const upload = static_1.getFileUploader('development');
        upload(req, res, err => {
            if (err) {
                console.log(`error:${err}`);
                res.status(404).json({ status: 'error', message: 'upload failed!' });
            }
            else {
                console.log(`filename:${req.file.filename}`);
                data_1.DataStore.posts[postIndex].img.push(req.file.filename);
                res.status(200).json({ status: "success", data: data_1.DataStore.posts[postIndex] });
            }
        });
    }
    else {
        res.status(404).json({ status: 'failed', message: 'upload failed' });
    }
};
