const express = require("express");
var router = express.Router();
var request = require("request");

router.get("/", function(req, res, next) {
  res.send({ quote: "I will love you till the end of time." });
});

module.exports = router;
