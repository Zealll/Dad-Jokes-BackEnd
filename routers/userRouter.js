const express = require('express')
const router = express.Router()
const jsonWT = require('jsonwebtoken')

const { restricted, generateToken, update } = require('./middleware.js')

const db = require('../data/dbConfig')
const helpers = require('./helpers.js')

router.get('/', restricted, (req, res) => {
    const id = req.decodedJWT.subject 

    db('users as u')
    .where('u.id', id)
    .then(users => {
        if(!users){
            res.status(404).send('User Doesn\'t Exist!')
        } else {
            res.status(200).json(users)
        }
    })
    .catch(err => res.status(500).json(err))
})


module.exports = router