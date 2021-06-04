  
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', (req, res)=>{

    let user = new User(req.body);
    user.save()
    .then(createdUser=>{
        res.status(201).json({_id: createdUser._id})
    })

    res.json({ok: true});
})

module.exports= router;