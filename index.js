const { urlencoded } = require('express')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000
const User = require('./models/user')


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',(req,res) => {
    res.json({
        message: "Server working"
    })
})

app.listen(PORT, ()=> {
    console.log(`Server running on: http://localhost:${PORT}`)
})