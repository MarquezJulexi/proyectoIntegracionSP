"use strict";
// controllers/Carpeta_Controller.ts
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
exports.carpetaController = void 0;
const carpet_model_1 = require("../models/carpet_model");
class CarpetaController {
    crearCarpeta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevaCarpeta = yield carpet_model_1.Carpeta.create(req.body);
                res.status(201).json(nuevaCarpeta);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al crear carpeta' });
            }
        });
    }
    obtenerCarpetas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const carpetas = yield carpet_model_1.Carpeta.find();
                res.status(200).json(carpetas);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al obtener carpetas' });
            }
        });
    }
    obtenerCarpetaPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const carpeta = yield carpet_model_1.Carpeta.findById(req.params.id);
                if (carpeta) {
                    res.status(200).json(carpeta);
                }
                else {
                    res.status(404).json({ mensaje: 'Carpeta no encontrada' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al obtener carpeta' });
            }
        });
    }
    actualizarCarpeta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const carpetaActualizada = yield carpet_model_1.Carpeta.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (carpetaActualizada) {
                    res.status(200).json(carpetaActualizada);
                }
                else {
                    res.status(404).json({ mensaje: 'Carpeta no encontrada' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al actualizar carpeta' });
            }
        });
    }
    eliminarCarpeta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const carpetaEliminada = yield carpet_model_1.Carpeta.findByIdAndDelete(req.params.id);
                if (carpetaEliminada) {
                    res.status(200).json(carpetaEliminada);
                }
                else {
                    res.status(404).json({ mensaje: 'Carpeta no encontrada' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ mensaje: 'Error al eliminar carpeta' });
            }
        });
    }
}
const carpetaController = new CarpetaController();
exports.carpetaController = carpetaController;
