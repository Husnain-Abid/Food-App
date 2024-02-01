const mongoose = require("mongoose")

// Create a Mongoose schema
const orderSchema = new mongoose.Schema({
    foods: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food"
        }
    ]
    ,
    payment: {},
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["preparing", "prepared", "on the way", "delivered"],
        default: "preparing"
    }

}, { timestamps: true });

// Create a Mongoose model
const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel




