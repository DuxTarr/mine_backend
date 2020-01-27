let jwt = require('jsonwebtoken');
const config = require('../config/jwt.js');

let Auth = {
    checkToken: (req, res, next) => {
        let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

        if (!token) {
            return res.json({
                success: false,
                message: 'Auth token is not defined'
            });
        }

        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }

        if (token) {
            jwt.verify(token, config.secretKey, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {
                    req.decoded = decoded;
                    next.pushed = 'pushed123123';
                    next();
                }
            });
        } else {
            return res.json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }
    }
};

module.exports = Auth;