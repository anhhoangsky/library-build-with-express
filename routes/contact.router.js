var express = require("express");
var router = express.Router();
var controller = require("../controller/contact.controller");

router.use(function(req, res, next) {
  console.log("%s %s %s", req.method, req.url, req.path);
  next();
});

router.get("/", controller.index);

module.exports = router;
