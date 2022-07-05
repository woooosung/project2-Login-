const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const session = require("express-session");
const bodyparser = require("body-parser");
const cookies = require("cookie-parser");
const {v4 : uuidv4} = require("uuid");
const router = require('./router.js');
const app = express();

const connectDB = require('./server/database/connection');

const PORT = process.env.PORT || 3000;

dotenv.config({path:'config.env'})

connectDB();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}))

/* //load static assests
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.use(session({
    secret : uuidv4(), //this method will make this session completely secret and unique
    resave : false,
    saveUninitialized : true
})); */

app.use('/route', router);

//home route
app.set('view engine', 'ejs');


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}/`)
}) 