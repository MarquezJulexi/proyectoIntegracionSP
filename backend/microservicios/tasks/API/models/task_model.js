"use strict";
// models/Tarea_Model.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
const mongoose_1 = require("mongoose");
const tareaSchema = new mongoose_1.Schema({
    titulo: String,
    descripcion: String,
    fechaVencimiento: Date,
    prioridad: String,
    completada: Boolean,
    usuarioId: String, // Cambiado a un identificador de usuario
});
const Tarea = (0, mongoose_1.model)('Tarea', tareaSchema);
exports.Tarea = Tarea;
