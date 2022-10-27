
const Draw = require("../models/draw");

exports.getAllDraws = async (req, res) => {
    const draws = await Draw.find();
    return res.json(draws);
}

exports.getDrawById = async (req, res) => {
    const draw = await Draw.findById(req.params.id);
    return res.json(draw);
}
exports.newDraw = async (req, res) => {
    const draw = new Draw(
        {
            team1: req.body.team1,
            team2: req.body.team2,
            group: req.body.group,
            round: req.body.round
        }
    );
    await draw.save();
    res.json({ message: 'Draw created successfully' });
}
exports.editDraw = async (req, res) => {

}
exports.startMatch = async (req, res) => {
    const currentMatch = await Draw.findOne({ status: 'in progress' });
    console.log(currentMatch)
    if (currentMatch == null) {
        await Draw.findByIdAndUpdate(req.params.id, {
            status: 'in progress'
        });
        res.json({ message: 'Match started!!!' });
    } else {
        res.status(500).json({ message: "Unable to start match, another match is in progress" })
    }

}

exports.getActiveMatch = async (req, res) => {
    const draws = await Draw.findOne({ status: 'in progress' });
    return res.json(draws);
}

exports.changePoints = async (req, res) => {
    await Draw.findByIdAndUpdate(req.body._id, {
        team1Score: req.body.team1Score,
        team2Score: req.body.team2Score,
        winners: req.body.winners,
        status: req.body.status
    });
    return res.json({ message: 'Updated' });
}


exports.deleteDraw = async (req, res) => {
    await Draw.findByIdAndDelete(req.params.id);
    res.json({ message: 'Player deleted' });
    return;
}