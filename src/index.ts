import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import personRouter from './modules/person/adapters/person.controller.js';

dotenv.config();
const app: Application = express();

app.use(morgan('dev'));
app.set('port', process.env.port || 3001);
app.use((req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control, Authorization, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use('/person', personRouter)

app.listen(app.get('port'), () => console.log(`Servicio corriendo en el puerto ${app.get('port')}`));