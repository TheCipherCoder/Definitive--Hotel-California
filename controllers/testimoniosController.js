var con = require('../config/conexion');
var habitacion = require('../models/reservacionesModelo');
var testimonios = require('../models/testimoniosModelo'); // Importa el modelo de testimonios

module.exports = {
    reservaciones: function(req, res) {
        habitacion.obtener(con, (err, dataHabitaciones) => {
            if (err) {
                console.error('Error al obtener habitaciones:', err);
                return res.status(500).send('Error al obtener habitaciones.');
            }
            // Obtén los testimonios
            testimonios.obtener(con, (err, dataTestimonios) => {
                if (err) {
                    console.error('Error al obtener testimonios:', err);
                    return res.status(500).send('Error al obtener testimonios.');
                }
                res.render('index', {
                    habitaciones: dataHabitaciones,
                    testimonios: dataTestimonios, // Pasa los testimonios a la vista
                    title: 'Reservaciones de Habitaciones'
                });
            });
        });
    }
};
