const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_nodejs' // Nombre de la base de datos
});

conexion.connect((error) => {
    if (error) {
        console.log('El error de conexión es: ' + error);
        return;
    }
    else {
        console.log('¡Conectado a la base de datos!');
    }
});

module.exports = conexion;