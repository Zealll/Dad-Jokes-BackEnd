require('dotenv').config()

module.exports = {
    jwtSecret: process.env.JWT_SECRETS || 'secrets'
}