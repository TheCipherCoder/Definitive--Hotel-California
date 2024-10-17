// El modelo controla las consultas con la db
module.exports = {
    obtener: function(conexion, funcion) {
        conexion.query('SELECT * FROM habitaciones', funcion);
    },

    insertar: function(conexion, datos, funcion) {
        // Asegúrate de que 'id' sea autoincremental en tu base de datos
        const query = 'INSERT INTO testimonios (nombre, correo, mensaje) VALUES (?, ?, ?)';
        conexion.query(query, [datos.nombre, datos.correo, datos.mensaje], funcion);
    }
};
