const db = require("../db");
module.exports.loginSession = (req, res, next) => {
  // console.log(req.cookies, req.signedCookies.username);
  if (!req.signedCookies.username) {
    res.render("auth/login");
    return;
  }
  var user = db
    .get("users")
    .find({ name: req.signedCookies.username })
    .value();
  if (!user) {
    res.render("auth/login");
    return;
  }
  res.locals.username = user.name;
  next();
};
