const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

var md5 = require("md5");

module.exports.loginPost = (req, res, next) => {
  // console.log(req.body)
  var hashedpassword = md5(req.body.Password);
  var user = db
    .get("users")
    .find({ email: req.body.Email })
    .value();
  if (!user) {
    res.render("auth/login", {
      errs: ["User does not exist"],
      email: req.body.Email
    });
    return;
  }
  if (user.password !== hashedpassword) {
    res.render("auth/login", {
      errs: ["Password required"],
      email: req.body.Email
    });
    return;
  }
  res.cookie("username", user.name, {
    signed: true
  });
  var referer = req.header("Referer");
  next();
};
