const jsonWT = require('jsonwebtoken')
const secrets = require('../config/secrets.js')

function generateToken(user) {
    const payload = {
        subject: user.id,
        email: user.email
    }

    const options = {
        expiresIn: '1d'
    }

    // console.log(jsonWT.sign(payload, secrets.jwtSecret, options))
    return jsonWT.sign(payload, secrets.jwtSecret, options)
}


function restricted(req, res, next) {
    const token = req.headers.authorization

    if(token) {
        jsonWT.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'Get a better Token'})
            } else {
                req.decodedJWT = decodedToken
                console.log('Decoded Token', req.decodedJWT)
                next()
            }
        })
    } else {
        res.status(401).json({ message: 'You need a Web Token to get an access'})
    }
}

function update(req, res, next) {
    const token = req.headers.authorization

    if(token) {
        jsonWT.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            req.decodedJWT = decodedToken
            console.log('Decoded Token', req.decodedJWT)
            next()
        })
    } else {
        res.status(401).json({message: "You need a web token to get an access"})
    }
}


module.exports = {
    generateToken, 
    restricted,
    update
}