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

router.get('/userWithJokes', restricted, (req, res) => {
    const id = req.decodedJWT.subject

    db('users as u')
    .where({ id })
    .then(users => {
        db('jokes as j')
        .where('j.user_id', id)
        .then(jokes => res.status(200).json(users.map(user => {
            return {
                ...user,
                jokes: jokes
            }
        })))
    })
})

router.put('/updatePUT', restricted, (req, res) => {
    //Matches the ID automatically
    const token = req.headers.authorization
    req.decodedJWT = jsonWT.decode(token)
    const id = req.decodedJWT.subject
    // const id = req.params.id
    const body = req.body

    helpers
    .editUser(id, body)
    .then(updated => {
        if(!updated) {
            res.status(404).json({ message: `User with an ID of ${id} does NOT exist`})
        }
        res.status(200).json({mesage: 'User updated Successfully'})
    })
    .catch(err => res.status(500).json({error: err}))
})


router.patch('/updatePATCH', restricted, (req, res) => {
    const token = req.headers.authorization
    req.decodedJWT = jsonWT.decode(token)
    const id = req.decodedJWT.subject
    const body = req.body

    helpers
    .editUser(id, body)
    .then(updated => {
        if(!updated) {
            res.status(403).json({ message: `User with an ID of ${id} does NOT exist`})
        }
        res.status(200).json({mesage: 'User updated Successfully'})
    })
    .catch(err => res.status(500).json({error: err}))
})


//deletes the USER, but keeps the jokes associated with the user
router.delete('/delete', restricted, (req, res) => {
    const token = req.headers.authorization
    req.decodedJWT = jsonWT.decode(token)
    const id = req.decodedJWT.subject

    helpers
    .deleteUser(id)
    .then(deleted => {
        if(!deleted) {
            res.status(403).json({ message: `User with an ID of ${id} does NOT exist`})
        }
        res.status(200).json({message: 'Account was successfully terminated!'})
    })
    .catch(err => res.status(500).json({error: err}))
})


// ===========WORK ON THIS LATER!!!!!!!================
// router.delete('/deleteBOTH', restricted, (req, res) => {
//     const token = req.headers.authorization
//     req.decodedJWT = jsonWT.decode(token)
//     const id = req.decodedJWT.subject

//     helpers
//     .deleteUserAndJokes(id)
//     .then(deleted => res.status(200).json(deleted))
//     .catch(err => res.status(500).json({error: err}))
// })


module.exports = router