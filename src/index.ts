import dotenv from 'dotenv';
import Server from './server/server';
import router from './route/heroe';
import MySql from './mysql/mysql';
dotenv.config()

const server = Server.init();

server.app.use( router )

MySql.instance;

server.srtart( () => {
    console.log('Servidor corriendo en el puerto: ', server.port);
});