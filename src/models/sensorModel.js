const mongoose = require("mongoose");

const SensorSchema = new mongoose.Schema({
    high : {
        type : Boolean,
        default : false
     
    },
    medium : {
        type : Boolean,
        default : false

    },
    low : {
        type: Boolean,
        default : false

    },
    zone: {
        type: String,
        required : true
    },
    city: {
        type:String,
        required: true,
        default : "Anand"
    },
    state: {
        type:String,
        required: true
    }

})

const SensorModel =  mongoose.model('sensors' , SensorSchema)

module.exports = {
    SensorModel
}