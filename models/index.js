'use strict'
const User = require('./user')

async function init() {
    await User.sync();
};
const Post = require('./user')

async function init() {
    await Post.sync();
};

init();

module.exports = {
    User, Post,
};