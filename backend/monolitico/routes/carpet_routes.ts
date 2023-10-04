// routes/Carpeta_Routes.ts

import express from 'express';
import { carpetaController } from '../controllers/carpet_controller';

const carpet_routes = express.Router();

carpet_routes.post('/create', carpetaController.crearCarpeta);
carpet_routes.get('/getall', carpetaController.obtenerCarpetas);
carpet_routes.get('/get/:id', carpetaController.obtenerCarpetaPorId);
carpet_routes.put('/update/:id', carpetaController.actualizarCarpeta);
carpet_routes.delete('/delete/:id', carpetaController.eliminarCarpeta);

export default carpet_routes;
