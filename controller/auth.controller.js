module.exports.login = (req, res) => {
  res.render("auth/login");
};

module.exports.loginPost = (req, res) => {
  if ("http://localhost:3000/login" == req.get("Referer"))
    res.redirect("bookshelf");
  // console.log(req.get("Referer"));
  else res.redirect("back");
};
