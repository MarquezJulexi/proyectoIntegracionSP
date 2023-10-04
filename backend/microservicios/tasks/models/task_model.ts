// models/Tarea_Model.ts

import { Document, Schema, model } from 'mongoose';

interface TareaAttrs {
  titulo: string;
  descripcion: string;
  fechaVencimiento: Date;
  prioridad: string;
  completada: boolean;
  usuarioId: string; // Cambiado a un identificador de usuario
}

export interface TareaDoc extends TareaAttrs, Document {}

const tareaSchema = new Schema({
  titulo: String,
  descripcion: String,
  fechaVencimiento: Date,
  prioridad: String,
  completada: Boolean,
  usuarioId: String, // Cambiado a un identificador de usuario
});

const Tarea = model<TareaDoc>('Tarea', tareaSchema);

export { Tarea };
