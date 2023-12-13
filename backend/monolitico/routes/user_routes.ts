// routes/Usuario_Routes.ts

import express from 'express';
import { usuarioController } from '../controllers/user_controller';

const user_routes = express.Router();

user_routes.post('/create', usuarioController.crearUsuario);
user_routes.get('/getall', usuarioController.obtenerUsuarios);
user_routes.get('/get/:id', usuarioController.obtenerUsuarioPorId);
user_routes.put('/update/:id', usuarioController.actualizarUsuario);
user_routes.put('/delete/:id', usuarioController.eliminarUsuario);
user_routes.post('/auth/login', usuarioController.iniciarSesion);
export default user_routes;
