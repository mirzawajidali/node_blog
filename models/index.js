const {Sequelize} = require('sequelize')
const databaseConfig = require('../config/db')

const sequelize = new Sequelize(
    databaseConfig.DATABASE_NAME,
    databaseConfig.DATABASE_USER,
    databaseConfig.DATABASE_PASS,
    {
        host: databaseConfig.DATABASE_HOST,
        dialect: databaseConfig.DIALECT
    }
);


sequelize.authenticate().then(()=>{
    console.log('Database connection successful')
}).catch(err => {
    console.log('Database connection error:',err)
})


module.exports = sequelize
