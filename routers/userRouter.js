const express = require('express')
const router = express.Router()
const jsonWT = require('jsonwebtoken')

const { restricted, generateToken, update } = require('./middleware.js')

const db = require('../data/dbConfig')
const helpers = require('./helpers.js')

// Returns an User That is Logged In
router.get('/individual', restricted, (req, res) => {
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

// Returns ALL Users
router.get('/all', restricted, (req, res) => {
    helpers
    .get()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json({error: err}))
})


module.exports = router