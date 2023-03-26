const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.postController.getPosts(res);
})

router.post('/create', (req, res) => {
    Controllers.postController.createPosts(req.body, res)
})

router.put('/addLikes', (req, res) => {
    Controllers.postController.addLikes(req.body, res)
})

module.exports = router;