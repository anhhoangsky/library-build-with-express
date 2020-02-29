const express = require("express");
const app = express();
const port = 3000;
// module lowdb for database

app.set('views', './views') // set views directory 
app.set('view engine', 'pug') // set template engine (pug) for view engine

var bookshelf = require('./routes/bookshelf.router.js')

app.get('/', (req, res) => {//HomePage
    res.render('index',{
        quocte: "Sách hay, cũng như bạn tốt, ít và được chọn lựa; chọn lựa càng nhiều, thưởng thức càng nhiều.",
        footer: "Good books, like good friends, are few and chosen; the more select, the more enjoyable.Louisa May Alcott"

    })
});

app.use('/bookshelf', bookshelf)//List Book

//static files
app.use(express.static('public'))

// db.defaults({
//     bookshelf: [
//         {
//             bookId: "",
//             bookName: "",
//             description: ""
//         }
//     ]
// })
//     .write()

app.listen(port, () => console.log(`app listening on port ${port}!`));