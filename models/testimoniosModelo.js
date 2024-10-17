// models/testimoniosModelo.js
module.exports = {
    obtener: function(conexion, funcion) {
        conexion.query('SELECT * FROM testimonios', funcion);
    }
};
