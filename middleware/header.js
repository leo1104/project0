const { verify } = require('jsonwebtoken');
require('dotenv').config();


function checkKey(req, res, next) {
    if (req.headers['x-api-key'] === process.env.KEY) {
        next();
    } else {
        console.log(req.headers)
        res.sendStatus(401);
    }
}
module.exports = {
    checkKey,
}