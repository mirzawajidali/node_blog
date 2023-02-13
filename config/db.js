const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    DATABASE_NAME: process.env.DATABASE_NAME || 'mydb',
    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE_USER: process.env.DATABASE_USER || 'root',
    DATABASE_PASS: process.env.DATABASE_PASS || '',
    DIALECT: process.env.DIALECT || 'mysql',
}