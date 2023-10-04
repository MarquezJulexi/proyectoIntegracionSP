"use strict";
// models/Usuario_Model.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombres: String,
    apellidos: String,
    fechaNacimiento: Date,
    correoElectronico: String,
    usuario: String,
    contraseña: String,
});
const Usuario = (0, mongoose_1.model)('Usuario', usuarioSchema);
exports.Usuario = Usuario;
