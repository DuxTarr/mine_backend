const jwtConfig = require('../config/jwt.js');

let jwt = require('jsonwebtoken');

let JwtService = {

    signToken: function (id) {
        return jwt.sign({'id': id, exp: Math.floor(Date.now() / 1000) + (256 * 24 * 60 * 60)}, jwtConfig.secretKey);
    },

    unSignToken: function (token) {
        try {
            return jwt.verify(token, jwtConfig.secretKey);
        } catch (err) {
            return {error: err.message}
        }
    }
};

module.exports = JwtService;
