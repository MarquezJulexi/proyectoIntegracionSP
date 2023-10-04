"use strict";
// controllers/Tarea_Controller.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tareaController = void 0;
const task_model_1 = require("../models/task_model");
class TareaController {
    crearTarea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { titulo, descripcion, fechaVencimiento, prioridad, completada, usuarioId } = req.body;
                const fechaVencimientoo = new Date(fechaVencimiento);
                const nuevaTarea = new task_model_1.Tarea({
                    titulo,
                    descripcion,
                    fechaVencimiento: fechaVencimientoo,
                    prioridad,
                    completada,
                    usuarioId,
                });
                yield nuevaTarea.save();
                res.status(201).json(nuevaTarea);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al crear tarea' });
            }
        });
    }
    obtenerTareas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tareas = yield task_model_1.Tarea.find();
                res.status(200).json(tareas);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al obtener tareas' });
            }
        });
    }
    obtenerTareaPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tarea = yield task_model_1.Tarea.findById(req.params.id);
                if (tarea) {
                    res.status(200).json(tarea);
                }
                else {
                    res.status(404).json({ mensaje: 'Tarea no encontrada' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al obtener tarea' });
            }
        });
    }
    actualizarTarea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tareaActualizada = yield task_model_1.Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (tareaActualizada) {
                    res.status(200).json(tareaActualizada);
                }
                else {
                    res.status(404).json({ mensaje: 'Tarea no encontrada' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al actualizar tarea' });
            }
        });
    }
    eliminarTarea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tareaEliminada = yield task_model_1.Tarea.findByIdAndDelete(req.params.id);
                if (tareaEliminada) {
                    res.status(200).json(tareaEliminada);
                }
                else {
                    res.status(404).json({ mensaje: 'Tarea no encontrada' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al eliminar tarea' });
            }
        });
    }
}
const tareaController = new TareaController();
exports.tareaController = tareaController;
