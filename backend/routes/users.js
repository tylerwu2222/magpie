const express = require('express');
const router = express.Router()

// get =
// viewing pages
router.get('/', (req, res) => {
    res.send('all users')
});

router.get('/new', (req, res) => {
    res.send('new user form')
});

// post = sending/creating data
router.post('/', (req, res) => {
    res.send('create new user')
})

// DYNAMIC ROUTES
router.route('/:id')
    .get((req, res) => {
        console.log('req.user', req.user);
        res.send(`Get user with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`update user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`delete user with ID ${req.params.id}`)
    });

// middleware - stuff that happens between sending response from server to client
users = [
    { 'name': 'tyler' },
    { 'name': 'mads' }
]
router.param('id', (req, res, next, id) => {
    // console.log(id);
    // define req.user by getting user with index id from data
    req.user = users[id]
    next();
})

module.exports = router;