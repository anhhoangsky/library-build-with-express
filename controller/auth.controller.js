module.exports.login = (req, res) => {
  res.render("auth/login");
};

module.exports.loginPost = (req, res) => {
  var ref = req.baseUrl;
  // .headers.referer
  //   .split("/")
  //   .slice(3)
  //   .join("/");
  if (ref === "/login") res.redirect("bookshelf");
  else res.redirect("back");
};
