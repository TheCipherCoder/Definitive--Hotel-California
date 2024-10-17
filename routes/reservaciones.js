var express = require('express')
var router = express.Router()
var reservacionesController = require('../controllers/reservacionesController')

router.get('/', reservacionesController.reservaciones)
router.post('/reservaciones/enviar', reservacionesController.enviarReserva);

module.exports = router