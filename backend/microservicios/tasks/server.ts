import express, { Express, Router } from 'express';
import cors from 'cors';
import { dbConnection } from './database/config';
import task_router from './routes/task_routes';


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
    this._express = express().use('/',this.App);
  }

  private async ConectarDB() {
    await dbConnection();
  }

  private middlewares() {
    this.App.use(cors());
    this.App.use(express.json());
  }

  private routes() {
    this.App.use('/task', task_router);
  }

  listen() {
    this._express.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

export { Server };