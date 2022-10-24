const mongoose = require('mongoose')
const { Schema } = mongoose;

const playerSchema = new Schema(
    {
        playerName: {
            type: String,
            required: true
        },
        group: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

const player = mongoose.model('Player', playerSchema)

module.exports = player