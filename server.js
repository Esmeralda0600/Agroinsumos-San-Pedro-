import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectMongo } from "./config/db.js";
import agro_spa_routes from "./routes/agro_spa_routes.js";
import agro_spa_routes_admin from "./routes/agro_spa_routes_admin.js";

// ⭐ IMPORTANTE → Ruta de favoritos
import favoritoRoutes from "./routes/favoritoRoutes.js";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Agro_spa",
            version: "1.0.0",
            description: "API para gestionar Agro_spa en MongoDB",
        },
    },
    apis: ["./controllers/*.js"],
};

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a Mongo
await connectMongo();

// Ruta principal prueba
app.get("/", (req, res) => {
    res.send(`
    <h2> API corriendo correctamente</h2>
    <p>Entorno: <b>${process.env.NODE_ENV}</b></p>
    <p>Puerto: <b>${process.env.PORT}</b></p>`);
});

// Rutas API
app.use("/usuarios", agro_spa_routes);
app.use("/administratores", agro_spa_routes_admin);
app.use("/favoritos", favoritoRoutes);   // ⭐ SE AGREGA ESTA

// Swagger
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
    console.log(`http://localhost:${PORT}/`);
});
