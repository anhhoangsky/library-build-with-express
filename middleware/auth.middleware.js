const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
module.exports.loginSession = (req, res, next)=>{
    // console.log(req.cookies)
    if(!req.cookies.username){
        res.redirect("/login")
        return
    }
    var user = db.get("users").find({name: req.cookies.username}).value()
    if(!user){
        res.redirect("/login")
        return
    }
    next()
}