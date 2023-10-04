// models/Carpeta_Model.ts

import { Document, Schema, model } from 'mongoose';
import { UsuarioDoc } from './user_model';

interface CarpetaAttrs {
  nombre: string;
  descripcion: string;
  usuario: UsuarioDoc['_id'];
}

export interface CarpetaDoc extends CarpetaAttrs, Document {}

const carpetaSchema = new Schema({
  nombre: String,
  descripcion: String,
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
});

const Carpeta = model<CarpetaDoc>('Carpeta', carpetaSchema);

export { Carpeta };
