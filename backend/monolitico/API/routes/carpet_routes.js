"use strict";
// routes/Carpeta_Routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carpet_controller_1 = require("../controllers/carpet_controller");
const carpet_routes = express_1.default.Router();
carpet_routes.post('/create', carpet_controller_1.carpetaController.crearCarpeta);
carpet_routes.get('/getall', carpet_controller_1.carpetaController.obtenerCarpetas);
carpet_routes.get('/get/:id', carpet_controller_1.carpetaController.obtenerCarpetaPorId);
carpet_routes.put('/update/:id', carpet_controller_1.carpetaController.actualizarCarpeta);
carpet_routes.put('/delete/:id', carpet_controller_1.carpetaController.eliminarCarpeta);
exports.default = carpet_routes;
