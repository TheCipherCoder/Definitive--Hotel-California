var express = require('express');
var router = express.Router();
var reservacionesController = require('../controllers/reservacionesController');

// Ruta para obtener las habitaciones y mostrar el formulario
router.get('/', reservacionesController.reservaciones);

// Ruta para enviar la reserva
router.post('/', reservacionesController.enviarReserva);

module.exports = router;
