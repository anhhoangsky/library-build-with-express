var express = require("express")
var router = express.Router()


router.use(function (req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path)
  next()
})

router.get('/',(req,res)=>{
  res.render('./bookshelf/index')
});

router.get('/create', (req,res)=>{
  res.render('./bookshelf/create')
})

router.get('/:id', function (req, res) {
  res.send('bookshelf Id ' + req.params.id)
})

router.use(express.json()) //parse Json
router.use(express.urlencoded({ extended: true })) // encoded

router.post('/create',(req,res)=>{
  console.log(req.body)
  res.redirect('/bookshelf')
})

module.exports = router;