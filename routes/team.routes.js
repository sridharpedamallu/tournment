const express = require('express')
const router = express.Router()

const team = require('../controllers/team.controller')

router.get('/', team.getAllTeams)
router.get('/:id', team.getTeamById)
router.post('/', team.newTeam)
router.put('/:id', team.editTeam)
router.delete('/:id', team.deleteTeam)

module.exports = router
