
const Player = require("../models/player");

exports.getAllPlayers = async (req, res) => {
    const players = await Player.find();
    return res.json(players);
}

exports.getPlayerById = async (req, res) => {
    const player = await Player.findById(req.params.id);
    return res.json(player);
}
exports.newPlayer = async (req, res) => {
    const { playerName, group, picture } = { ...req.body };

    if (!playerName || playerName == '' || !group || group == '' || !picture || picture == '') {
        res.status(500).json({ message: 'Insufficient data' });
        return;
    }

    const player = new Player({
        playerName: playerName.toLowerCase(),
        group: group.toUpperCase(),
        picture: picture
    });

    await Player.find({ playerName }).then(async (result) => {
        if (result.length) {
            return res.status(500).json({ error: "Player already exists" });
        } else {
            await player.save();
            return res.json({ message: "player created successfully" });
        }
    });

}
exports.editPlayer = async (req, res) => {

}
exports.deletePlayer = async (req, res) => {
    await Player.findByIdAndDelete(req.params.id);
    res.json({ message: 'Player deleted' });
    return;
}