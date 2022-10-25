
const Team = require("../models/team");

exports.getAllTeams = async (req, res) => {
    const teams = await Team.find();
    return res.json(teams);
}

exports.getTeamById = async (req, res) => {
    const team = await Team.findById(req.params.id);
    return res.json(team);
}
exports.newTeam = async (req, res) => {
    const { player1, player2, group } = { ...req.body };
    const team = new Team({
        player1,
        player2,
        group
    });
    await team.save();
    res.json({ message: 'Team created successfully' })
}
exports.editTeam = async (req, res) => {

}
exports.deleteTeam = async (req, res) => {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ message: 'Player deleted' });
    return;
}