const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.activityController.getActivity(req.query, res);
});

module.exports = router;
