const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

module.exports.loginPost = (req, res, next)=>{
    console.log(req.body)
    var password = req.body.Password
    var user = db.get("users").find({email: req.body.Email}).value()
    if(!user){
        res.render("auth/login")
        return
    }
    if(!user.password == password){
        res.render("auth/login")
        return
    }
    res.cookie("username", user.name)
    next()
}

module.exports.loginSession = (req, res, next)=>{
    // console.log(req.cookies)
    var user = db.get("users").find({name: req.cookies.username}).value()
    if(!user){
        res.redirect("/login")
        return
    }
    next()
}