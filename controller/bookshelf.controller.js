const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
//exports la object -> chua duoc function, variable, object
module.exports.index = (req, res) => {
    res.render('bookshelf/index', {
        bookshelf: db.get('bookshelf').value(),
        title: "List"
    })
}

module.exports.create = (req, res) => {
    res.render('bookshelf/create',{
        title: "Create"
    })
}

module.exports.view = (req, res) => {
    var id = req.params.id
    var book = db.get('bookshelf').find({bookId: id}).value()
    console.log(book)
    res.render('bookshelf/view',{
        book: book,
        title: book.bookName
    })
}

module.exports.createPost = (req, res) => {
    console.log(req.body)
    res.redirect('/bookshelf')
}
