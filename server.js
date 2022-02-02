const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();


app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PORT = process.env.PORT;
const URI = process.env.URI;

mongoose.connect(URI);
const db = mongoose.connection;
db.once('open', () => { console.log("connected to database successfully")})

app.listen(PORT, ()=>{console.log(`server running on port:${PORT}`)})