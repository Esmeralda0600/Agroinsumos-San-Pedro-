import Favorito from "../models/favoritoModel.js"; // tu modelo de favoritos

// Listar favoritos de un usuario
export const listarFavoritos = async (req, res) => {
    const { usuarioId } = req.params;
    try {
        const favoritos = await Favorito.find({ usuario: usuarioId });
        res.json(favoritos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Agregar favorito
export const agregarFavorito = async (req, res) => {
    const { usuario, nombre, precio, imagen } = req.body;
    try {
        const nuevoFavorito = await Favorito.create({ usuario, nombre, precio, imagen });
        res.status(201).json(nuevoFavorito);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar favorito
export const eliminarFavorito = async (req, res) => {
    const { favoritoId } = req.params;
    try {
        await Favorito.findByIdAndDelete(favoritoId);
        res.json({ mensaje: "Favorito eliminado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
