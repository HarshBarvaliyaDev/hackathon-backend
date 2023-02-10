// routes
const {userRouter} = require('./src/routes/userRoutes')
const  {sensorRouter}= require('./src/routes/sensorRoutes')
const  {adminRouter}= require('./src/routes/adminRoutes')

const {connectToDatabase} = require('./src/connectDatabase')

//from env file
require('dotenv').config()
const DB_connection = process.env.DB_connection;
const port = process.env.PORT;

// express
const express = require("express");

const app = express();


//enable using cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.cookieSecretKey))

 
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middlewares


// database connection
connectToDatabase()

// Routes
app.use('/' , userRouter)
app.use('/' , sensorRouter)
app.use('/' , adminRouter)

app.listen(5000 , ()=>{
    console.log(`http://localhost:5000`);
})
