const mongoose = require("mongoose")

// Create a Mongoose schema
const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is require"]
    },
    imageURL: {
        type: String,
        require: [true, "Image is require"],
        default: "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
    },

}, { timestamps: true });

// Create a Mongoose model
const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel




