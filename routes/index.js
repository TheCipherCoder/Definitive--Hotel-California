var express = require('express');
var router = express.Router();
var testimoniosController = require('../controllers/testimoniosController'); 


router.get('/', testimoniosController.reservaciones); 

module.exports = router;
