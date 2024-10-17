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
        const { nombre, correo, telefono, mensaje } = req.body;

        // Validamos que los campos no estén vacíos
        if (!nombre || !correo || !telefono || !mensaje) {
            return res.status(400).send('Todos los campos son requeridos');
        }

        // Insertamos los datos en la base de datos
        con.query('INSERT INTO reservas (nombre, correo, telefono, mensaje) VALUES (?, ?, ?, ?)', 
        [nombre, correo, telefono, mensaje], 
        (err, result) => {
            if (err) {
                console.error('Error al insertar reserva:', err);
                return res.status(500).send('Error al insertar la reserva');
            }
            console.log('Reserva guardada:', result);
            res.redirect('/reservaciones'); // Redireccionamos después de enviar
        });
    }
};
