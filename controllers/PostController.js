const { render } = require('ejs');
const Post = require('../models/post')

module.exports.create = async (req,res) => {
    let body = req.body;
    console.log(body)
    let post = await Post.create(body)
    console.log(res)
    return res.redirect('/post');
}

module.exports.show = async (req,res) => {
    let posts = await Post.findAll({})
    return res.render('blog/home',{posts: posts})
}