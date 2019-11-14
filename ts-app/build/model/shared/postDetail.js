"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postSummary_1 = require("./postSummary");
const todos_1 = require("./todos");
class PostDetail extends postSummary_1.PostSummary {
    constructor(postData, todoData, postImages) {
        super(postData);
        this.todo = todoData.map((item) => new todos_1.Todo(item));
        this.price = postData.price;
        this.currency = postData.currency;
        this.img = postImages;
    }
}
exports.PostDetail = PostDetail;
