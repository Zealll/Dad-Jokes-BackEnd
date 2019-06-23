const db = require('../data/dbConfig')


module.exports = {
    get,
    insert,
    findBy,
    getJokes
}

function get() {
    return db('users')
} 

function insert(user) {
    return db('users')
    .insert(user)
    .then(ids => ids[0])
}

function findBy(credentials) {
    return db('users')
    .where(credentials)
}




// JOKES helpers

function getJokes() {
    return db('jokes')
}