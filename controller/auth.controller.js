module.exports.login = (req, res)=>{
    res.render("auth/login")
}

module.exports.loginPost = (req, res)=>{
    res.redirect("/")
}