var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
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
        .catch(err=>{
            console.log(err);
        })

});
module.exports = router;
