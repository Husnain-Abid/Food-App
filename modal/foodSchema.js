const mongoose = require("mongoose")

// Create a Mongoose schema
const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is require"]
    },
    description: {
        type: String,
        require: [true, "Description is require"]
    },
    price: {
        type: Number,
        require: [true, "Price is require"]
    },
    imageUrl: {
        type: String,
        default:""
    },
    foodTags: {
        type: Array,
    },
    category: {
        type: String,
    },
    code: {
        type: Number,
    },
    isAvaliabity: {
        type: Boolean,
    },
    resturent: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Resturent" 
    },
    rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5
    },
    ratingCount: {
        type: Number,
    },


}, { timestamps: true });

// Create a Mongoose model
const foodModel = mongoose.model('Food', foodSchema);

module.exports = foodModel




