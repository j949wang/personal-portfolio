const express = require("express");
var router = express.Router();
var request = require("request");

router.get("/", function(req, res, next) {
  res.send({ quote: "Smile a bit more today~" });
});

module.exports = router;
