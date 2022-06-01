import express, { Application } from 'express';
import cors from 'cors';
import path = require('path');

export default class Server {

    public app: Application;
    public port: string;

    constructor() {
        this.port = process.env.PORT || '8000';
        this.app = express();
        this.midelwares();
    }

    static init () {
        return new Server(  );
    }

    private publicFolder () {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }

    midelwares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    srtart( callbck: any ) {
        this.app.listen(this.port, callbck);
        this.publicFolder();
    }

}