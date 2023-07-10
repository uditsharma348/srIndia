const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        unique: [true, "Email id is already present"],
    },
    phone:{
        type:String,
        minlength:10,
        maxlength:10,
        required:true,
        unique:true
    },
    password:{
        type:String,
        min:8,
        required:true
    },
    confirmPassword:{
        type:String,
        min:8,
        required:true
    }
})

const User = new mongoose.model('User',userSchema);
module.exports = User;