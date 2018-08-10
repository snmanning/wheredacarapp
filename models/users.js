const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Email = require('mongoose-type-email');
const crypto = require('crypto');

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

userSchema.methods.setPassword = function setPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512')
                        .toString('hex');
    this.salt = salt;
    this.hash = hash;
}

const User = mongoose.model('User', userSchema);

module.exports = User;