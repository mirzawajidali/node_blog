const User = require('../models/user')

module.exports.signup = async (req,res) => {
    return res.render('auth/signup')
}
module.exports.signin = async (req,res) => {
    return res.render('auth/signin')
}