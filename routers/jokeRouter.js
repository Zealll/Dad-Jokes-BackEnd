const express = require('express')
const router = express.Router()
const jsonWT = require('jsonwebtoken')

const { restricted } = require('./middleware.js')

const db = require('../data/dbConfig')
const helpers = require('./helpers.js')

//Getting ALL the jokes
router.get('/', (req, res) => {
    helpers
    .getJokes()
    .then(jokes => res.status(200).json(jokes))
    .catch(err => res.status(500).json(err))
})

//Getting jokes that belong to the LOGGED IN User
router.get('/userjokes', restricted, (req, res) => {
    const id = req.decodedJWT.subject 

    db('jokes as j')
    .where('j.user_id', id)
    .then(jokes => res.status(200).json(jokes))
    .catch(err => res.status(500).json({error: err}))
})

//Adding Jokes
router.post('/add', restricted, (req, res) => {
    const joke = req.body

    helpers
    .insertJoke(joke)
    .then(joke => res.status(200).json(joke))
    .catch(err => res.status(500).json({error: err}))
})


module.exports = router