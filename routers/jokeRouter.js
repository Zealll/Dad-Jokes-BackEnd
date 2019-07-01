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
router.get('/userJokes', restricted, (req, res) => {
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
    .then(joke => res.status(201).json(joke))
    .catch(err => res.status(500).json({error: err}))
})

router.put('/editPUT/:id', restricted, (req, res) => {
    const id = req.params.id
    const body = req.body

    helpers
    .editJoke(id, body)
    .then(updated => {
        if(!updated) {
            res.status(404).json({ message: `Joke with an ID of ${id} does NOT exist`})
        }
        res.status(200).json(updated)
    })
    .catch(err => res.status(500).json({ error: err }))
})

router.patch('/editPATCH/:id', restricted, (req, res) => {
    const id = req.params.id
    const body = req.body

    helpers
    .editJoke(id, body)
    .then(updated => {
        if(!updated) {
            res.status(404).json({ message: `Joke with an ID of ${id} does NOT exist`})
        }
        res.status(200).json(updated)
    })
    .catch(err => res.status(500).json({ error: err }))
})

router.delete('/delete/:id', restricted, (req, res) => {
    const id = req.params.id

    helpers
    .deleteJokes(id)
    .then(deleted => {
        if(!deleted) {
            res.status(404).json({ message: `Joke with an ID of ${id} does NOT exist`})
        }
        res.status(200).json({ message: 'Joke successfully deleted!' })
    })
    .catch(err =>  res.status(500).json({ error: err }))
})


module.exports = router