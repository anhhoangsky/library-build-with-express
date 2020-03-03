const express = require("express");
const app = express();
const port = 3000;

var middleware = require("./middleware/auth.middleware")

var cookieParser = require('cookie-parser')
app.use(express.json()) //parse Json
app.use(cookieParser()) //parse cookies
app.use(express.urlencoded({ extended: true })) // encoded

// module lowdb for database
app.set('views', './views') // set views directory 
app.set('view engine', 'pug') // set template engine (pug) for view engine

var bookshelf = require('./routes/bookshelf.router.js')
var auth = require('./routes/auth.router')

app.get('/', (req, res) => {//HomePage
    res.render('index',{
        quocte: "Sách hay, cũng như bạn tốt, ít và được chọn lựa; chọn lựa càng nhiều, thưởng thức càng nhiều.",
        footer: "Good books, like good friends, are few and chosen; the more select, the more enjoyable.Louisa May Alcott"
    })
});
app.use('/bookshelf', middleware.loginSession, bookshelf)//List Book
app.use('/login', auth) //login
//static files
app.use(express.static('public'))
app.listen(port, () => console.log(`app listening on port ${port}!`));