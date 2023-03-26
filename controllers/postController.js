"use strict";
const sequelize = require("sequelize");
const Models = require("../models");

const getPosts = (res) => {
    Models.Post.findAll({}).then(function (data) {
        res.send({result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

const createPosts = (data, res) => {
    Models.Post.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const addLikes = (data, res) => {
    let criteria = {
        where: {
            id: data.postId
        }
    }
    let dataToUpdate = {
        likes: sequelize.literal('likes + 1') 
    }
    Models.Post.update(dataToUpdate, criteria).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getPosts, createPosts, addLikes,
}