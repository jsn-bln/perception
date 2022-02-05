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

router.get('/', (req,res) => {
    Users.find({fullname: req.body.fullname}, (err,user) => {
        if(err) return res.status(500).json({message: err.message})
        if(user){
            return res.status(200).json({ fullname :user.fullname})
        }
        if(!user) return res.status(400).json({message: "user not found"})
    })
})

router.post('/login', (req,res) => {
    Users.findOne({username: req.body.username}, async (err, user) => {
        if(err) return res.status(500).json({message : err.message})
        if(!user) return res.status(400).json({message: "username"})
        if(user) {
            const passwordCheck = await bcryt.compare(req.body.password, user.password)
            console.log(passwordCheck)
            if(passwordCheck) return res.status(200).json({message: "login successfully"})
            if(!passwordCheck) return res.status(400).json({message : "password"})
        }
    })
})


module.exports = router