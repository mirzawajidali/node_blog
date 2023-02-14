const JWT = require('jsonwebtoken')
const secret = "$super2244";

function createWebToken(user){
    const payload = {
        _id: user.id,
        name: user.name,
        email: user.email
    }

    const token = JWT.sign(payload, secret);
    return token;
}

function verifyToken(token){
    const payload = JWT.verify(token,secret);
    return payload;
}


module.exports = {
    createWebToken,
    verifyToken
}