const mongoose = require('mongoose')
const { Schema } = mongoose;

const drawSchema = new Schema(
    {
        team1: {
            type: String,
            required: true
        },
        team2: {
            type: String,
            required: true
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
            type: Number,
            default: 0,
        },
        group: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

const draw = mongoose.model('Draw', drawSchema)

module.exports = draw