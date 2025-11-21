// Método que devuelve una referencia a otra base de datos dentro del mismo servidor MongoDB, sin necesidad de reconectarte.
db=db.getSiblingDB("agro_spa_DB");
// Crea una colección llamada "usuarios" y agrega un documento
db.usuarios.insertOne({
    nombre_usuario: "@Leonardo",
    correo : "leonardo@gmail.com",
    password : "$2b$10$TCECRTnRSidoYCYouMIfy.uvmGzheQOVll/jESOMBJUzUgq860Rwm",
});
db.usuarios.insertOne({
    nombre_usuario: "@Marlen",
    correo : "Marlen@gmail.com",
    password : "23451",
});
db.usuarios.insertOne({
    nombre_usuario: "@Esmeralda",
    correo : "Esmeralda@gmail.com",
    password : "34512",
});
db.usuarios.insertOne({
    nombre_usuario: "@Natalia",
    correo : "Natalia@gmail.com",
    password : "45123",
});
db.usuarios.insertOne({
    nombre_usuario: "@Johan",
    correo : "Johan@gmail.com",
    password : "51234",
});

db.categorias.insertOne({ nombre: "SEMILLAS", img: "imgs/semillas.jpg" });
db.categorias.insertOne({ nombre: "FERTILIZANTES", img: "imgs/fertilizantes.jpg" });
db.categorias.insertOne({ nombre: "HERBICIDAS", img: "imgs/herbicidas.jpg" });
db.categorias.insertOne({ nombre: "ADHERENTE", img: "imgs/adherentes.jpg" });

db.marcas.insertOne({ nombre: "BAYER", img: "imgs/bayer.jpg" });
db.marcas.insertOne({ nombre: "SYNGENTA", img: "imgs/sygenta.jpg" });
db.marcas.insertOne({ nombre: "ULTRASOL", img: "imgs/ultrasol.jpg" });
db.marcas.insertOne({ nombre: "AGROENZYMAS", img: "imgs/agroenzymas.jpg" });

db.ingredientes.insertOne({ nombre: "GLIFOSATO", img: "imgs/ingrediente.jpg" });
db.ingredientes.insertOne({ nombre: "ATRAZINA", img: "imgs/ingrediente.jpg" });
db.ingredientes.insertOne({ nombre: "IMIDACLOPRID", img: "imgs/ingrediente.jpg" });
db.ingredientes.insertOne({ nombre: "PARAQUAT", img: "imgs/ingrediente.jpg" });
