const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cookies = require("cookie-parser");
const router = require('./router.js');
const userRoutes = require('./server/routes/users');
const authRoutes = require('./server/routes/auth');
const cors = require("cors");
const app = express();

const connectDB = require('./server/database/connection');

const PORT = process.env.PORT || 3000;

dotenv.config({path:'config.env'})
//connect with mongo
connectDB();
//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}))
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

//home route
app.set('view engine', 'ejs');
 

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}/`)
}) 