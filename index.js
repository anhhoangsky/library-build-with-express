const express = require("express");
const app = express();
const port = 3000;
// module lowdb for database
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

app.set('views', './views') // set views directory 
app.set('view engine', 'pug') // set template engine (pug) for view engine

var bookshelf = require('./routes/bookshelf.router.js')

app.get('/', (req, res) => {//HomePage
    res.render('index',{
        bookName: "Doc Sach"
    })
});

app.use('/bookshelf', bookshelf)//List Book

const adapter = new FileSync('db.json')
const db = low(adapter)

// db.defaults({
//     bookshelf: [
//         {
//             bookName: "",
//             description: ""
//         }
//     ]
// })
//     .write()

app.listen(port, () => console.log(`app listening on port ${port}!`));