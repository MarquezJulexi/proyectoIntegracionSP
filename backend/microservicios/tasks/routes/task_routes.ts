// routes/Tarea_Routes.ts

import express from 'express';
import { tareaController } from '../controllers/task_controller';

const task_router = express.Router();

task_router.post('/create', tareaController.crearTarea);
task_router.get('/getall', tareaController.obtenerTareas);
task_router.get('/get/:id', tareaController.obtenerTareaPorId);
task_router.put('/update/:id', tareaController.actualizarTarea);
task_router.delete('/delete/:id', tareaController.eliminarTarea);

export default task_router;
