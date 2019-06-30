const db = require('../data/dbConfig')


module.exports = {
    get,
    insert,
    findBy,
    editUser,
    deleteUser,
    // deleteUserAndJokes,
    getJokes,
    insertJoke,
    deleteJokes,
    editJoke,
    getLikes,
    addLikes,
    editLikes,
    deleteLikes
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

// function deleteUserAndJokes(id) {
//     return db('jokes as j')
//     .join('users as u', 'u.id', 'j.user_id')
//     .where('j.user_id', id)
//     // .andWhere('j.user_id', id)
//     .del()
    
// }





// JOKES helpers

function getJokes() {
    return db('jokes')
}

function insertJoke(joke) {
    return db('jokes')
    .insert(joke)
    .then(ids => ids[0])
}

function deleteJokes(id) {
    return db('jokes')
    .where({ id })
    .del()
}

function editJoke(id, joke) {
    return db('jokes')
    .where({ id })
    .update(joke)
}


//LIKED TABLE HELPERS

function getLikes() {
    return db('liked')
}

function addLikes(like) {
    return db('liked')
    .insert(like)
    .then(ids => ids[0])
}

function editLikes(id, like) {
    return db('liked')
    .where({ id })
    .update(like)
}

function deleteLikes(id) {
    return db('liked')
    .where({ id })
    .del()
}