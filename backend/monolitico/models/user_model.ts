// models/Usuario_Model.ts
import bcrypt from 'bcrypt';
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

export interface UsuarioDoc extends UsuarioAttrs, Document {
  compararContraseña(candidata: string): Promise<boolean>;
}

const usuarioSchema = new Schema({
  nombres: String,
  apellidos: String,
  fechaNacimiento: Date,
  correoElectronico: String,
  usuario: {type: String, unique: true},
  contraseña: String,
  eliminado: {type: Boolean, default: false},
});
usuarioSchema.methods.compararContraseña = async function (
  candidata: string
): Promise<boolean> {
  const coincide = await bcrypt.compare(candidata, this.contraseña);
  return coincide;
};

const Usuario = model<UsuarioDoc>('Usuario', usuarioSchema);

export { Usuario };
