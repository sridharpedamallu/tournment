const express = require('express')
const router = express.Router()

const player = require('../controllers/player.controller')

router.get('/', player.getAllPlayers)
router.get('/:id', player.getPlayerById)
router.post('/', player.newPlayer)
router.put('/:id', player.editPlayer)
router.delete('/:id', player.deletePlayer)

module.exports = router
