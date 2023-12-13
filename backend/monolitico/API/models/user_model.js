"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
// models/Usuario_Model.ts
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombres: String,
    apellidos: String,
    fechaNacimiento: Date,
    correoElectronico: String,
    usuario: String,
    contraseña: String,
    eliminado: { type: Boolean, default: false },
});
usuarioSchema.methods.compararContraseña = function (candidata) {
    return __awaiter(this, void 0, void 0, function* () {
        const coincide = yield bcrypt_1.default.compare(candidata, this.contraseña);
        return coincide;
    });
};
const Usuario = (0, mongoose_1.model)('Usuario', usuarioSchema);
exports.Usuario = Usuario;
