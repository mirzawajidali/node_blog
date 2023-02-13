const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('./index')

const Post = sequelize.define("post", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
});

sequelize.sync({force:true}).then(() => {
    console.log("posts table create.")
}).catch(error => {
    console.log(error)
});

module.exports = Post