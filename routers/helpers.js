const db = require('../data/dbConfig')


module.exports = {
    get,
    insert,
    findBy,
    editUser,
    deleteUser,
    getJokes,
    insertJoke
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

function editUser(id, user) {
    return db('users')
    .where({ id })
    .update(user)
}

function deleteUser(id) {
    return db('users')
    .where({ id })
    .del()
}




// JOKES helpers

function getJokes() {
    return db('jokes')
}

function insertJoke(joke) {
    return db('jokes')
    .insert(joke)
    .then(ids => ids[0])
}