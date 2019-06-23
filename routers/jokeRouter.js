const express = require('express')
const router = express.Router()
const jsonWT = require('jsonwebtoken')

const { restricted } = require('./middleware.js')

const db = require('../data/dbConfig')
const helpers = require('./helpers.js')

router.get('/', (req, res) => {
    helpers
    .getJokes()
    .then(jokes => res.status(200).json(jokes))
    .catch(err => res.status(500).json(err))
})


module.exports = router