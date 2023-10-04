// controllers/Tarea_Controller.ts

import { Request, Response } from 'express';
import { Tarea, TareaDoc } from '../models/task_model';

class TareaController {
  async crearTarea(req: Request, res: Response) {
    try {
      const { titulo, descripcion, fechaVencimiento, prioridad,completada,usuarioId } = req.body;
      const fechaVencimientoo = new Date(fechaVencimiento);
      
      const nuevaTarea = new Tarea({
          titulo,
          descripcion,
          fechaVencimiento: fechaVencimientoo,
          prioridad, // Agrega aquí los otros atributos
          completada,
          usuarioId,
      });

      await nuevaTarea.save();
      res.status(201).json(nuevaTarea);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear tarea' });
    }
  }

  async obtenerTareas(req: Request, res: Response) {
    try {
      const tareas: TareaDoc[] = await Tarea.find();
      res.status(200).json(tareas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener tareas' });
    }
  }

  async obtenerTareaPorId(req: Request, res: Response) {
    try {
      const tarea: TareaDoc | null = await Tarea.findById(req.params.id);
      if (tarea) {
        res.status(200).json(tarea);
      } else {
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener tarea' });
    }
  }

  async actualizarTarea(req: Request, res: Response) {
    try {
      const tareaActualizada: TareaDoc | null = await Tarea.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (tareaActualizada) {
        res.status(200).json(tareaActualizada);
      } else {
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al actualizar tarea' });
    }
  }

  async eliminarTarea(req: Request, res: Response) {
    try {
      const tareaEliminada: TareaDoc | null = await Tarea.findByIdAndDelete(
        req.params.id
      );
      if (tareaEliminada) {
        res.status(200).json(tareaEliminada);
      } else {
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar tarea' });
    }
  }
}

const tareaController = new TareaController();
export { tareaController };
