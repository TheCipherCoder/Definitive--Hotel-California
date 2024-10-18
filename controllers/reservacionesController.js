var con = require('../config/conexion');
var habitacion = require('../models/reservacionesModelo');

module.exports = {
    reservaciones: function(req, res) {
        habitacion.obtener(con, (err, data) => {
            if (err) {
                console.error('Error al obtener habitaciones:', err);
                return res.status(500).send('Error al obtener habitaciones.');
            }
            console.log('Habitaciones obtenidas:', data);
            res.render('reservaciones', { habitaciones: data });
        });
    },

    enviarReserva: function(req, res) {
        const { nombre, correo, mensaje } = req.body;
            
        const datos = { nombre, correo, mensaje };
    
        // Insertamos los datos en la base de datos
        habitacion.insertar(con, datos, (err) => {
            if (err) {
                console.error('Error al insertar los datos:', err);
                return res.status(500).send('Error al enviar la reserva.');
            }
            res.redirect('/');
        });
    }

    
};
