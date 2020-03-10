const express = require("express");
const app = express();
const port = 3000;

var middleware = require("./middleware/auth.middleware");

var cookieParser = require("cookie-parser");
app.use(express.json()); //parse Json
app.use(cookieParser("hello")); //parse cookies
app.use(express.urlencoded({ extended: true })); // encoded

// module lowdb for database
app.set("views", "./views"); // set views directory
app.set("view engine", "pug"); // set template engine (pug) for view engine

var bookshelf = require("./routes/bookshelf.router.js");
var auth = require("./routes/auth.router");
var home = require("./routes/home.router");
var logout = require("./routes/logout.router");
var contact = require("./routes/contact.router");

app.use("/", home);
app.use("/bookshelf", middleware.loginSession, bookshelf); //List Book
app.use("/login", auth); //login
app.use("/logout", logout);
app.use("/contact", contact);
//static files
app.use(express.static("public"));
app.listen(port, () => console.log(`app listening on port ${port}!`));
