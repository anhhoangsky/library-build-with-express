const db = require("../db");

module.exports.index = (req, res) => {
  //HomePage
  res.render("index", {
    quocte:
      "Sách hay, cũng như bạn tốt, ít và được chọn lựa; chọn lựa càng nhiều, thưởng thức càng nhiều.",
    footer:
      "Good books, like good friends, are few and chosen; the more select, the more enjoyable.Louisa May Alcott",
    username: req.signedCookies.username
  });
};
