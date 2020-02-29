const express = require("express");
const app = express();
const port = 3000;
// module lowdb for database

app.set('views', './views') // set views directory 
app.set('view engine', 'pug') // set template engine (pug) for view engine

var bookshelf = require('./routes/bookshelf.router.js')

app.get('/', (req, res) => {//HomePage
    res.render('index',{
        Title: "Co Anh Day"
    })
});

app.use('/bookshelf', bookshelf)//List Book



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