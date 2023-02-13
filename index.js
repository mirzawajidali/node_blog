const { urlencoded } = require('express')
const express = require('express')
const path = require('path')
const app = express()
const ejs = require('ejs')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000
const PostRoutes = require('./routes/post')


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'))

app.use('/post',PostRoutes);

app.get('/',(req,res) => {
    const name = "Wajid"
    res.render('blog/home',{
        name: name
    })
})

app.get('/add',(req,res) => {
    res.render('blog/form')
})

app.listen(PORT, ()=> {
    console.log(`Server running on: http://localhost:${PORT}`)
})