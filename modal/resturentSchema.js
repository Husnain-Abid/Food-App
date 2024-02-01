const mongoose = require("mongoose")

// Create a Mongoose schema
const resturentSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is require"]
    },
    imageUrl: {
        type: String,

    },
    foods: {
        type: Array,
    },
    time: {
        type: String,
    },
    pickedUp: {
        type: Boolean,
    },
    delivery: {
        type: Boolean,
    },
    isOpen: {
        type: Boolean,
    },
    logoUrl: {
        type: String,
    },
    rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5
    },
    ratingCount: {
        type: String,
    },

    resturent_code: {
        type: String,
    },

    coords: {
        id: { type: String, },
        latitude: { type: Number, },
        latitudeDelta: { type: Number, },
        longitude: { type: Number, },
        longitudeDelta: { type: Number, },
        address: { type: String, },
        title: { type: String, },
    },

}, { timestamps: true });

// Create a Mongoose model
const resturentModel = mongoose.model('Resturent', resturentSchema);

module.exports = resturentModel




