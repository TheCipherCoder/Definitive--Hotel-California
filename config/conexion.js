var mysql = require('mysql2');
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hotel'
})

conexion.connect((err)=>{
    if(err){
        console.log('Error al conectar')
    }else{
        console.log('Conectado a la base de datos')
    }

})

module.exports = conexion;