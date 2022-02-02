const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcryt = require('bcrypt')
const Users = require('../Models/userSchema')


router.post('/register', (req,res) => {
    Users.findOne({username : req.body.username}, async (err, match) => {
        if(err) return res.status(500).json({message : err.message})
        if(match){
            return res.status(400).json({message: 'username'})
        }
        if(!match){
            const hash = await bcryt.hash(req.body.password, 10)
            const newUser = new Users({
                username: req.body.username,
                password: hash,
                fullname: req.body.fullname
            })
            await newUser.save();
            res.status(201).json({message: 'registered successfully'})
        }
    })
})


module.exports = router