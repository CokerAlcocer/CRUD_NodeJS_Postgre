// se declaran las dependencias
const express = require('express');
const morgan = require('morgan');

// se establece el puerto
const port = 3000;

// se inicia la applicación con express
const app = express();

// se establece el puerto donde va a correr la app
app.set('port', process.env.port || port);

// se define morgan como dependencia de desarrollo
app.use(morgan('dev'));

// configuraciones iniciales de la app
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next) =>  {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    next();
});

// se definen los archivos de donde consumirá las URI's
app.use(require('./routes/index'));
app.use('/user', require('./routes/user-management.js'));

// se ejecuta la app
app.listen(app.get('port'), () => {
    console.log(`Servicio corriendo en el puerto ${app.get('port')}`);
});



