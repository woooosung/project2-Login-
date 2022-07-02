const express = require("express");
const path = require("path")
const bodyparser = require("body-parser");

const PORT = 3000;

const app = express();

const connectDB = require('./server/database/connection');

connectDB();

app.get('/', (req, res) => {
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}/`)
})