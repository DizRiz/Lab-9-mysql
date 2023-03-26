'use strict'

const User = require('./user')
async function init() {
    await User.sync();
};

const Post = require('./post')
async function init() {
    await Post.sync();
};

const Comment = require('./comment')
async function init() {
    await Comment.sync();
};

init();

module.exports = {
    User, Post, Comment
};