const mongoose = require('mongoose')
const { Schema } = mongoose;

const teamSchema = new Schema(
    {
        player1: {
            type: String,
            required: true
        },
        player2: {
            type: String,
            required: true
        },
        group: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

const team = mongoose.model('Team', teamSchema)

module.exports = team