const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

const user = mongoose.model('User', userSchema)

module.exports = user