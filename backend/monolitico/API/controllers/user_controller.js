"use strict";
// controllers/Usuario_Controller.ts
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
exports.usuarioController = void 0;
const user_model_1 = require("../models/user_model");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UsuarioController {
    crearUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombres, apellidos, fechaNacimiento, correoElectronico, usuario, contraseña } = req.body;
                const fechaNacimientoo = new Date(fechaNacimiento);
                const hashContraseña = yield bcrypt_1.default.hash(contraseña, 10);
                const nuevoUsuario = new user_model_1.Usuario({
                    nombres,
                    apellidos,
                    fechaNacimiento: fechaNacimientoo,
                    correoElectronico,
                    usuario,
                    contraseña: hashContraseña,
                });
                yield nuevoUsuario.save();
                res.status(201).json(nuevoUsuario);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al crear usuario' });
            }
        });
    }
    obtenerUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield user_model_1.Usuario.find({ eliminado: false });
                res.status(200).json(usuarios);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al obtener usuarios' });
            }
        });
    }
    obtenerUsuarioPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield user_model_1.Usuario.findById({
                    _id: req.params.id,
                    eliminado: false,
                });
                if (usuario) {
                    res.status(200).json(usuario);
                }
                else {
                    res.status(404).json({ mensaje: 'Usuario no encontrado' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al obtener usuario' });
            }
        });
    }
    actualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioActualizado = yield user_model_1.Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (usuarioActualizado) {
                    res.status(200).json(usuarioActualizado);
                }
                else {
                    res.status(404).json({ mensaje: 'Usuario no encontrado' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al actualizar usuario' });
            }
        });
    }
    eliminarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioEliminado = yield user_model_1.Usuario.findByIdAndUpdate(req.params.id, { eliminado: true }, { new: true });
                if (usuarioEliminado) {
                    res.status(200).json(usuarioEliminado);
                }
                else {
                    res.status(404).json({ mensaje: 'Usuario no encontrado' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al eliminar usuario' });
            }
        });
    }
    iniciarSesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { usuario, contraseña } = req.body;
                // Buscar al usuario por su nombre de usuario
                const usuarioEncontrado = yield user_model_1.Usuario.findOne({
                    usuario,
                    eliminado: false,
                });
                if (usuarioEncontrado) {
                    // Verificar la contraseña
                    const contraseñaValida = yield usuarioEncontrado.compararContraseña(contraseña);
                    if (contraseñaValida) {
                        res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
                    }
                    else {
                        res.status(401).json({ mensaje: 'Contraseña incorrecta' });
                    }
                }
                else {
                    res.status(404).json({ mensaje: 'Usuario no encontrado' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al iniciar sesión' });
            }
        });
    }
}
const usuarioController = new UsuarioController();
exports.usuarioController = usuarioController;
