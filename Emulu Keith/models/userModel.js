const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim:true,
    },
    lastName:{
        type: String,
        unique: true,
        required: true,
        trim:true,
    },
    DateOfBirth:{
        type:String,
        required: true,
        unique: true,
        trim:true,
    },
    Gender:{
        type:String,
        required: true,
        trim:true,
    },
    Country:{
        type: String,
        required: true,
        trim:true,
    },
    State:{
        type: String,
        required: true,
        trim:true,
    },
    Town:{
        type: String,
        required: true,
        trim:true,
    },
    ZipCode:{
        type: String,
        required: true,
        trim:true,
    },
    phoneNumber1:{
        type: String,
        required: true,
        trim:true,
    },
    phoneNumber2:{
        type: String,
        required: true,
        trim:true,
    },
    email:{
        type: String,
        required: true,
        trim:true,
    },
    ZipCode:{
        type: String,
        required: true,
        trim:true,
    },
    

});

module.exports = mongoose.model("Employee", employeeSchema);
