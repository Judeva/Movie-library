var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.get('/:username', function (req, res, next) {
    User.findOne({ username: req.params.username })
        .then(data => {
            res.send(data)
        })
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {

    const { username, password } = req.body;

    let newUser = {
        username,
        password,
        favorites: [],
        notes: [],
        ratings: []
    }

    let user = new User(newUser);
    user.save()
        .then(createdUser => {
            console.log('User created succesfully!')
        })
        .catch(err => {
            console.log(err);
        })

});


router.patch('/:username', function (req, res, next) {

    User.findOneAndUpdate( { username: req.params.username }, req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => console.log(err));
});

module.exports = router;
