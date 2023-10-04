"use strict";
// models/Carpeta_Model.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carpeta = void 0;
const mongoose_1 = require("mongoose");
const carpetaSchema = new mongoose_1.Schema({
    nombre: String,
    descripcion: String,
    usuario: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Usuario' },
});
const Carpeta = (0, mongoose_1.model)('Carpeta', carpetaSchema);
exports.Carpeta = Carpeta;
