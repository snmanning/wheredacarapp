const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    lat: {
        type: Number,
        min: -90,
        max: 90,
        required: true
    },
    long: {
        type: Number,
        min: -180,
        max: 180,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true
    }
});