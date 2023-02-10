const { ref } = require("joi");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    admin: {
        type: Boolean,
        required: true,
        default: false,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
});

const UserModel =  mongoose.model("users", UserSchema);

module.exports = {
    UserModel,
};
