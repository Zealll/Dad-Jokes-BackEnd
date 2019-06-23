const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const { generateToken } = require('./middleware.js')

const helpers = require('./helpers.js')

router.post('/register', (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 4)
    user.password = hash

    if(user.email.includes('@')) {
        res.status(403).send("Please make sure you entered correct e-mail address")
    } else {
        helpers
        .insert(user)
        .then(registered => res.status(201).json(registered))
        .catch(error => req.status(500).json(error))
    }
})

router.post('/login', (req, res) => {
    let { email, password } = req.body

    helpers
    .findBy({ email })
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({ message: `Logged In! Your ID is ${user.id}`, token})
        } else {
            res.status(401).json({ message: "Please Provide Correct Credentials"})
        }
    })
    .catch(error => res.status(500).json({error}))
})



module.exports = router