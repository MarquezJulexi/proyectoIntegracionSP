// controllers/Carpeta_Controller.ts

import { Request, Response } from 'express';
import { Carpeta, CarpetaDoc } from '../models/carpet_model';

class CarpetaController {
  async crearCarpeta(req: Request, res: Response) {
    try {
      const nuevaCarpeta: CarpetaDoc = await Carpeta.create(req.body);
      res.status(201).json(nuevaCarpeta);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear carpeta' });
    }
  }

  async obtenerCarpetas(req: Request, res: Response) {
    try {
      const carpetas: CarpetaDoc[] = await Carpeta.find({ eliminado: false });
      res.status(200).json(carpetas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener carpetas' });
    }
  }

  async obtenerCarpetaPorId(req: Request, res: Response) {
    try {
      const carpeta: CarpetaDoc | null = await Carpeta.findById({
        _id: req.params.id,
        eliminado: false,
      });
      if (carpeta) {
        res.status(200).json(carpeta);
      } else {
        res.status(404).json({ mensaje: 'Carpeta no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener carpeta' });
    }
  }

  async actualizarCarpeta(req: Request, res: Response) {
    try {
      const carpetaActualizada: CarpetaDoc | null = await Carpeta.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (carpetaActualizada) {
        res.status(200).json(carpetaActualizada);
      } else {
        res.status(404).json({ mensaje: 'Carpeta no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al actualizar carpeta' });
    }
  }

  async eliminarCarpeta(req: Request, res: Response) {
    try {
      const carpetaEliminada: CarpetaDoc | null = await Carpeta.findByIdAndUpdate(
        req.params.id,
        { eliminado: true },
        { new: true }
      );
      if (carpetaEliminada) {
        res.status(200).json(carpetaEliminada);
      } else {
        res.status(404).json({ mensaje: 'Carpeta no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar carpeta' });
    }
  }
}

const carpetaController = new CarpetaController();
export { carpetaController };
