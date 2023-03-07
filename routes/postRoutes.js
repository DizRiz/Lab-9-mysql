const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.userController.getPosts(res);
})

router.post('/createpost', (req, res) => {
    Controllers.userController.createPosts(req.body, res)
})

router.put('/addLikes', (req, res) => {
    Controllers.postController.addLikes(req.body, res)
})

module.exports = router;