var express = require("express")
var router = express.Router()
var controller = require("../controller/bookshelf.controller")
var validate = require("../validate/bookshelf.validate")
router.use(function (req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path)
  next()
})

router.get('/', controller.index);

router.get('/create', controller.create)

router.get('/:id', controller.view)

router.post('/create', validate.createPost, controller.createPost)

module.exports = router;