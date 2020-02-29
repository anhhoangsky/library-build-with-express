var express = require("express")
var router = express.Router()
var controller = require("../controller/bookshelf.controller")

router.use(function (req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path)
  next()
})

router.get('/', controller.index);

router.get('/create', controller.create)

router.get('/:id', controller.view)

router.use(express.json()) //parse Json
router.use(express.urlencoded({ extended: true })) // encoded

router.post('/create', controller.createPost)

module.exports = router;