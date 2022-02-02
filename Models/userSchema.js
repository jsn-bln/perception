const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    post: {
        type: String,
        required: true,
        maxlength: 10000
    },
    Date:{
        type:Date,
        default:Date.now()
    }
})

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    fullname: String,
    post: [postSchema]
})

module.exports = mongoose.model('users',userSchema);