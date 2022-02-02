const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();

//MIDDLEWARE

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PORT = process.env.PORT;
const URI = process.env.URI;

mongoose.connect(URI);
const db = mongoose.connection;
db.once('open', () => { console.log("connected to database successfully")})



//ROUTES
const userRoute = require('./Routes/routes')
app.use('/user',userRoute)

app.listen(PORT, ()=>{console.log(`server running on port:${PORT}`)})