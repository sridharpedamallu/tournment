
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
    // const { player1, player2, group } = { ...req.body };
    // const draw = new Team({
    //     player1,
    //     player2,
    //     group
    // });
    // await draw.save();
    console.log(req.body);
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
    console.log(req.params.id)
    await Draw.findByIdAndUpdate(req.params.id, {
        status: 'in progress'
    });

    res.send('Match started!!!');
}
exports.deleteDraw = async (req, res) => {
    await Draw.findByIdAndDelete(req.params.id);
    res.json({ message: 'Player deleted' });
    return;
}