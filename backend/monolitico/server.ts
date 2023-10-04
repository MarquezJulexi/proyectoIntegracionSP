import express, { Express, Router } from 'express';
import cors from 'cors';
import { dbConnection } from './database/config';
import user_router from './routes/user_routes';
import carpet_router from './routes/carpet_routes';
class Server {
  App: Router;
  port: number;
  private _express: Express;

  constructor() {
    this.App = Router();
    this.port = Number(process.env.PORT || 3000);
    this.ConectarDB();
    this.middlewares();
    this.routes();
    this._express = express().use('/backend',this.App);
  }

  private async ConectarDB() {
    await dbConnection();
  }

  private middlewares() {
    this.App.use(cors());
    this.App.use(express.json());
  }

  private routes() {
    this.App.use('/user', user_router);
    this.App.use('/carpet', carpet_router);
  }

  listen() {
    this._express.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

export { Server };