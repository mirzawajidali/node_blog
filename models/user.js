const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('./index')

const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

sequelize.sync().then(() => {
    console.log("users table create.")
}).catch(error => {
    console.log(error)
});

module.exports = User