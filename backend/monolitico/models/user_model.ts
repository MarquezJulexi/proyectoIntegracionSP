// models/Usuario_Model.ts

import { Document, Schema, model } from 'mongoose';

interface UsuarioAttrs {
  nombres: string;
  apellidos: string;
  fechaNacimiento: Date;
  correoElectronico: string;
  usuario: string;
  contraseña: string;
  eliminado: boolean;
}

export interface UsuarioDoc extends UsuarioAttrs, Document {}

const usuarioSchema = new Schema({
  nombres: String,
  apellidos: String,
  fechaNacimiento: Date,
  correoElectronico: String,
  usuario: String,
  contraseña: String,
  eliminado: {type: Boolean, default: false},
});

const Usuario = model<UsuarioDoc>('Usuario', usuarioSchema);

export { Usuario };
