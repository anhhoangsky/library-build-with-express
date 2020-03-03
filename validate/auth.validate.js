const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

module.exports.loginPost = (req, res, next)=>{
    // console.log(req.body)
    var password = req.body.Password
    var user = db.get("users").find({email: req.body.Email}).value()
    if(!user){
        res.render("auth/login",{
            errs: [
                'User does not exist'
            ],
            values: req.body.Email 
        })
        return
    }
    if(user.password !== password){
        res.render("auth/login",{
            errs: [
                'Password required'
            ]
        })
        return
    }
    res.cookie("username", user.name)
    next()
}