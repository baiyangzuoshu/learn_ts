"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const postDetail_1 = require("../../model/shared/postDetail");
exports.apiGetDetail = (req, res) => {
    console.log(`apiGetDetail:${req.params.id}`);
    const selectedPost = data_1.DataStore.posts.find((item) => item.id == req.params.id);
    if (selectedPost) {
        const selectdTodos = data_1.DataStore.todos.filter((item) => item.postId == req.params.id);
        const imgURLs = selectedPost.img;
        res.json(new postDetail_1.PostDetail(selectedPost, selectdTodos, imgURLs));
    }
    else {
        res.status(404).json({ status: 'failed', message: 'post not found!' });
    }
};
