const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Email = require('mongoose-type-email');

const userSchema = new Schema({
    email: {
        type: Email,
        required: true,
        trim: true,
        unique: true,
        maxlength: 64
        },
    hash: {
        type: String,
        required: true
        },
    salt: {
        type: String,
        required: true
        }
});

const User = mongoose.model('User', userSchema);

module.exports = User;