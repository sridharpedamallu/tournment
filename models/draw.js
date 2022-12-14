const mongoose = require('mongoose')
const { Schema } = mongoose;

const drawSchema = new Schema(
    {
        team1: {
            type: Object
        },
        team2: {
            type: Object
        },
        team1Score: {
            type: Number,
            default: 0,
        },
        team2Score: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            default: 'not started'
        },
        schedule: {
            type: Date,
            required: false,
        },
        round: {
            type: String,
            required: true,
            default: 'R1'
        },
        winners: {
            type: String,
            default: 0,
        },
        group: {
            type: String
        },
    },
    { timestamps: true }
);

const draw = mongoose.model('Draw', drawSchema)

module.exports = draw