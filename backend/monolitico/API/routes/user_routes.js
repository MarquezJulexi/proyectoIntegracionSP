"use strict";
// routes/Usuario_Routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user_controller");
const user_routes = express_1.default.Router();
user_routes.post('/create', user_controller_1.usuarioController.crearUsuario);
user_routes.get('/getall', user_controller_1.usuarioController.obtenerUsuarios);
user_routes.get('/get/:id', user_controller_1.usuarioController.obtenerUsuarioPorId);
user_routes.put('/update/:id', user_controller_1.usuarioController.actualizarUsuario);
user_routes.put('/delete/:id', user_controller_1.usuarioController.eliminarUsuario);
user_routes.post('/auth/login', user_controller_1.usuarioController.iniciarSesion);
exports.default = user_routes;
