const mongoose = require('mongoose')
require('dotenv').config('../.env')

async function connectToDatabase(){
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.DB_connection).then(()=>{
            console.log("database connected");
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connectToDatabase
}