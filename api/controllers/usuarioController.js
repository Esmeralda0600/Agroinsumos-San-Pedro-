import { UsuarioMongo } from "../models/mongoModels.js";
import bcrypt from "bcryptjs";

// ========================
// LISTAR USUARIOS
// ========================
export async function listarUsuarios(req, res) {
  try {
    const mongoData = await UsuarioMongo.find();
    res.json({ mongo: mongoData });
  } catch (err) {
    res.status(500).json({ error: "Error al listar usuarios" });
  }
}

// ========================
// REGISTRAR USUARIO
// ========================
export async function crearUsuario(req, res) {
  try {
    console.log("BODY RECIBIDO:", req.body);

    const { nombre_usuario, correo, password } = req.body;

    if (!nombre_usuario || !correo || !password) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    // Validar formato del correo
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    if (!correoValido) {
      return res.status(400).json({ error: "Formato de correo inválido" });
    }

    // Verificar si ya existe
    const existe = await UsuarioMongo.findOne({ correo });
    if (existe) {
      return res.status(400).json({ error: "El correo ya está registrado" });
    }

    // Encriptar la contraseña
    const hash = await bcrypt.hash(password, 10);

    const usuario = await UsuarioMongo.create({
      nombre_usuario,
      correo,
      contraseña: hash     // <=== IMPORTANTE
    });

    res.status(201).json({
      mensaje: "Usuario creado correctamente",
      id: usuario._id
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error al crear usuario",
      detalle: err.message
    });
  }
}


// ========================
// LOGIN
// ========================
export async function login_Usuario(req, res) {
  try {
    const { correo, password } = req.body;

    if (!correo || !password) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    // Buscar usuario
    const user = await UsuarioMongo.findOne({ correo });
    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    // Validar contraseña (comparar con el hash real)
    const passwordCorrecta = await bcrypt.compare(password, user.contraseña);

    if (!passwordCorrecta) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    res.json({
      mensaje: "Login exitoso",
      usuario: {
        id: user._id,
        nombre: user.nombre_usuario,
        correo: user.correo
      }
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno" });
  }
}
