module.exports.logout = (req, res)=>{
    res.clearCookie('username')
    res.redirect('/')
}