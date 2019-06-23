const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')

const userRouter = require('../routers/userRouter')
const authRouter = require('../routers/authRouter')
const jokeRouter = require('../routers/jokeRouter')

server.use(express.json())
server.use(helmet())
server.use(cors())


server.get('/', (req, res) => {
    res.send(
        `<h1>Welcome to my Jokes App!</h1>`
    )
})


server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)
server.use('/api/jokes', jokeRouter)


module.exports = server