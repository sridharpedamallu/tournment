const express = require('express')
const router = express.Router()

const draw = require('../controllers/draw.controller')

router.put('/start-match/:id', draw.startMatch)
router.get('/get-active-match', draw.getActiveMatch)
router.post('/change-points', draw.changePoints)
router.get('/', draw.getAllDraws)
router.get('/:id', draw.getDrawById)
router.post('/', draw.newDraw)
router.put('/:id', draw.editDraw)
router.delete('/:id', draw.deleteDraw)


module.exports = router
