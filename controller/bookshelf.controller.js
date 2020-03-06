const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

var randomId = require("random-id");
var len = 30;

// pattern to determin how the id will be generated
// default is aA0 it has a chance for lowercased capitals and numbers
var pattern = "aA0";

//exports la object -> chua duoc function, variable, object
module.exports.index = (req, res) => {
  console.log(req.cookies);
  res.render("bookshelf/index", {
    bookshelf: db.get("bookshelf").value(),
    title: "List"
  });
};

module.exports.create = (req, res) => {
  res.render("bookshelf/create", {
    title: "Create"
  });
};

module.exports.view = (req, res) => {
  var id = req.params.id;
  var book = db
    .get("bookshelf")
    .find({ bookId: id })
    .value();
  res.render("bookshelf/view", {
    book: book,
    title: book.bookName
  });
};

module.exports.createPost = (req, res) => {
  req.body.bookId = randomId(len, pattern);
  db.get("bookshelf")
    .push(req.body)
    .write();
  res.redirect("/bookshelf");
};
