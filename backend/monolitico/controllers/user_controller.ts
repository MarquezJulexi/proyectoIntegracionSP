// controllers/Usuario_Controller.ts

import { Request, Response } from 'express';
import { Usuario, UsuarioDoc } from '../models/user_model';

class UsuarioController {
  async crearUsuario(req: Request, res: Response) {
    try {
      const { nombres, apellidos, fechaNacimiento, correoElectronico,usuario,contraseña } = req.body;
      const fechaNacimientoo = new Date(fechaNacimiento);
      
      const nuevoUsuario = new Usuario({
          nombres,
          apellidos,
          fechaNacimiento: fechaNacimientoo,
          correoElectronico, // Agrega aquí los otros atributos
          usuario,
          contraseña,
      });
      await nuevoUsuario.save();
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear usuario' });
    }
  }

  async obtenerUsuarios(req: Request, res: Response) {
    try {
      const usuarios: UsuarioDoc[] = await Usuario.find({ eliminado: false });
      res.status(200).json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener usuarios' });
    }
  }

  async obtenerUsuarioPorId(req: Request, res: Response) {
    try {
      const usuario: UsuarioDoc | null = await Usuario.findById({
        _id: req.params.id,
        eliminado: false,
      });
      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener usuario' });
    }
  }

  async actualizarUsuario(req: Request, res: Response) {
    try {
      const usuarioActualizado: UsuarioDoc | null = await Usuario.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (usuarioActualizado) {
        res.status(200).json(usuarioActualizado);
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al actualizar usuario' });
    }
  }

  async eliminarUsuario(req: Request, res: Response) {
    try {
      const usuarioEliminado: UsuarioDoc | null = await Usuario.findByIdAndUpdate(
        req.params.id,
        { eliminado: true },
        { new: true }
      );
      if (usuarioEliminado) {
        res.status(200).json(usuarioEliminado);
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar usuario' });
    }
  }
}

const usuarioController = new UsuarioController();
export { usuarioController };
