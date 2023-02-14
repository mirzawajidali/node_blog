const User = require('../models/user')
const Authentication = require('../service/authentication')

module.exports.signup = async (req,res) => {
    return res.render('auth/signup')
}
module.exports.register = async (req,res) => {
    const body = req.body;
    let user = await User.create(body)
    return res.redirect('signup');
}
module.exports.signin = async (req,res) => {
    return res.render('auth/signin')
}


module.exports.signedin = async (req,res) => {
    const {email, password} = req.body;
    let user = await User.findOne({where:{
        email: email
    }})
    if(user){
        const token = await Authentication.createWebToken(user);
        return res.cookie("token",token).redirect('/post');
    }else{
        return res.redirect('signin');
    }
    
}