import { Request, Response } from 'express';
import MySql from '../mysql/mysql';

export const getHeros = ( req: Request, res: Response)=> {
    const query = `SELECT * FROM heroes`;
    MySql.ejecutarQuery( query, ( err: any, heroes: Object[]) => {
        if ( err ) {
            res.status(400).json({
                ok: false,
                message: err
            });
        } else {
            res.json({
                ok: true,
                message: 'Heroes',
                heroes
            });
        }
    });
}

export const getHeroById = ( req: Request, res: Response)=> {
    const id = req.params.id;
    const scapeId = MySql.instance.cnn.escape( id );
    const query = `SELECT * FROM heroes where id = ${ scapeId }`;
    MySql.ejecutarQuery( query, ( err: any, heroe: Object[]) => {
        if ( err ) {
            res.status(400).json({
                ok: false,
                message: err
            });
        } else {
            res.json({
                ok: true,
                heroe
            });
        }
    });
}

export const postHeroe = (req:Request, res:Response) => {
    const {body} = req;
    const query = `INSERT INTO heroes (nombre, poder, description) VALUES ('${body.nombre}', '${body.poder}', '${body.description}')`;	
    MySql.ejecutarQuery( query, ( err: any, heroe: Object[]) => {
        if ( err ) {
            res.status(400).json({
                ok: false,
                message: err
            });
        } else {
            res.status(200).json({
            ok:true,
            heroe
            });
        } 
    });
}

export const putHeroe = (req:Request, res:Response) => {
    const id = req.params.id;
    const scapeId = MySql.instance.cnn.escape( id );
    const {body} = req;
    const query = `UPDATE heroes SET nombre = '${body.nombre}', poder = '${body.poder}', description = '${body.description}' WHERE id = ${scapeId}`;
    MySql.ejecutarQuery( query, ( err: any, heroe: Object[]) => {
        if ( err ) {
            res.status(400).json({
                ok: false,
                message: err
            });
        } else {
            res.status(200).json({
            ok:true
            });
        } 
    });
}

export const deleteHeroe = (req:Request, res:Response) => {
    const id = req.params.id;
    const scapeId = MySql.instance.cnn.escape( id );
    const query = `DELETE FROM heroes WHERE id = ${scapeId}`;
    MySql.ejecutarQuery( query, ( err: any, heroe: Object[]) => {
        if ( err ) {
            res.status(400).json({
                ok: false,
                message: err
            });
        } else {
            res.status(200).json({
            ok:true,
            heroe
            });
        } 
    });
}
