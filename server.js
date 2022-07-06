const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
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

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

//home route 
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}/`)
})