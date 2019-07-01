const express = require('express')
const router = express.Router()
const jsonWT = require('jsonwebtoken')

const { restricted } = require('./middleware.js')

const db = require('../data/dbConfig')
const helpers = require('./helpers.js')


// Returns all Li
router.get('/', restricted, (req, res) => {
    helpers
    .getLikes()
    .then(liked => res.status(200).json(liked.map(liked => {
        return {
            ...liked,
            liked: liked.liked === 0 ? false : true,
            disliked: liked.disliked === 0 ? false : true
        }
    })))
    .catch(err => res.status(500).json({ error: err }))
})

router.post('/add', restricted, (req, res) => {
    const body = req.body

    helpers
    .addLikes(body)
    .then(added => res.status(201).json(added))
    .catch(err => res.status(500).json({ error: err }))
})

router.put('/editPUT/:id', restricted, (req, res) => {
    const id = req.params.id
    const body = req.body

    helpers
    .editLikes(id, body)
    .then(updated => {
        if(!updated){
            res.status(404).json({ message: `Table with an ID of ${id} does NOT exist`})
        }
        res.status(200).json({ message: 'Successfully Upated!!'})
    })
    .catch(err => res.status(500).json({ error: err}))
})

router.patch('/editPATCH/:id', restricted, (req, res) => {
    const id = req.params.id
    const body = req.body

    helpers
    .editLikes(id, body)
    .then(updated => {
        if(!updated){
            res.status(404).json({ message: `Table with an ID of ${id} does NOT exist`})
        }
        res.status(200).json({ message: 'Successfully Upated!!'})
    })
    .catch(err => res.status(500).json({ error: err}))
})

router.delete('/delete/:id', restricted, (req, res) => {
    const id =  req.params.id

    helpers
    .deleteLikes(id)
    .then(deleted => {
        if(!deleted) {
            res.status(404).json({ message: `Table with an ID of ${id} does NOT exist`})
        }
        res.status(200).json({ message: 'Successfully Updated' })
    })
    .catch(err => res.status(500).json({ error: err }))
})



module.exports = router