import express from "express";
import { listarUsuarios, crearUsuario, login_Usuario} from "../controllers/usuarioController.js";

const router = express.Router();
router.get("/", listarUsuarios);
router.post("/", crearUsuario);
router.post("/login", login_Usuario);

console.log("rutas ok");

export default router;