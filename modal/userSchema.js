const mongoose = require("mongoose")

// Create a Mongoose schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: [true, "Username is require"]
    },
    email: {
        type: String,
        require: [true, "Email is require"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "password is require"]
    },
    address: {
        type: Array,
    },
    phone: {
        type: String,
        require: [true, "Phone number is require"]
    },
    usertype: {
        type: String,
        required: [true, "usertype is required"],
        default: "Admin",
        enum: ['Admin', 'HR', 'Custom Support'],
    },
    answer: {
        type: String,
        require: [true, "answer is require"]
    },
}, { timestamps: true });

// Create a Mongoose model
const userModel = mongoose.model('User', userSchema);

module.exports = userModel




