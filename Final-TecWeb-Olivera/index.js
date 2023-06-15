require("./config/conexion");
const express = require("express");
const port = (process.env.PORT || 3000);

// express
const app = express();

// admitir
app.use(express.json());

// config
app.set('port', port);

// rutes 
app.use('/api', require('./rutas'));

// iniciar express
app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('Error al iniciar servidor: ' + error);
    }
    else {
        console.log('Servidor iniciado en el puerto: ' + app.get('port'));
    }
});