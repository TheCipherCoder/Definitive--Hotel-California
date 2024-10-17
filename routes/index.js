var express = require('express');
var router = express.Router();
var testimoniosController = require('../controllers/testimoniosController'); // Importa tu controlador

/* GET home page. */
router.get('/', testimoniosController.reservaciones); // Cambia la función que maneja la ruta

module.exports = router;
