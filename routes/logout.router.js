var express = require("express")
var router = express.Router()
var controller = require("../controller/logout.controller")

router.use(function (req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path)
    next()
  })

router.get('/', controller.logout)

module.exports = router