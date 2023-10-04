"use strict";
// routes/Tarea_Routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("../controllers/task_controller");
const task_router = express_1.default.Router();
task_router.post('/create', task_controller_1.tareaController.crearTarea);
task_router.get('/getall', task_controller_1.tareaController.obtenerTareas);
task_router.get('/get/:id', task_controller_1.tareaController.obtenerTareaPorId);
task_router.put('/update/:id', task_controller_1.tareaController.actualizarTarea);
task_router.delete('/delete/:id', task_controller_1.tareaController.eliminarTarea);
exports.default = task_router;
