module.exports.createPost = (req, res, next)=>{
    console.log(req.body)
    var errs = [];
    if (!req.body.bookName) {
        errs.push('Name is required.')
        res.render('bookshelf/create', {
            errs: errs,
            values: req.body
        })
        return;
    }
    if (!req.body.description) {
        req.body.description = "nothing"
    }
    next()
}