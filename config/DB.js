const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log("db is connected");
    } catch (error) {
        console.log("error in db",error);
    }
}

module.exports = connectDB


