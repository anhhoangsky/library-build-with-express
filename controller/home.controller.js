const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

module.exports.index = (req, res) => {//HomePage
    // var username
    // var userId = req.cookies.userId
    // if(typeof userId !== 'undefined'){
    //     username = db.get('users').find({userId: userId}).value().name
    // }
    res.render('index',{
        quocte: "Sách hay, cũng như bạn tốt, ít và được chọn lựa; chọn lựa càng nhiều, thưởng thức càng nhiều.",
        footer: "Good books, like good friends, are few and chosen; the more select, the more enjoyable.Louisa May Alcott",
        username: req.signedCookies.username
    })
}