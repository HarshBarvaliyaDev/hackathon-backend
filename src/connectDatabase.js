const mongoose = require('mongoose')
const DB_connection = "mongodb+srv://HarshBarvaliya:HarshBarvaliya@hackathon-backend.lndvhgg.mongodb.net/?retryWrites=true&w=majority"

async function connectToDatabase(){
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(DB_connection).then(()=>{
            console.log("database connected");
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connectToDatabase
}
