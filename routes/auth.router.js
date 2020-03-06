var express = require("express");
var router = express.Router();
var controller = require("../controller/auth.controller");
var validate = require("../validation/auth.validation");

router.use(function(req, res, next) {
  console.log("%s %s %s", req.method, req.url, req.path);
  next();
});

router.get("/", controller.login);

router.post("/", validate.loginPost, controller.loginPost);

module.exports = router;
