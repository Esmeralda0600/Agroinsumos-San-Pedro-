const btn_registro = document.getElementById("boton_registro");
if (btn_registro){
    btn_registro.addEventListener("click", registrar_usuario);
}
const btn_login = document.getElementById("boton-login");
if (btn_login){
    btn_login.addEventListener("click", login);
}

async function registrar_usuario() {

    // tomar valores en el momento del clic
    const nombre_usuario = document.getElementById("usuario").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    try {
        //console.log({ nombre_usuario, correo, password });
        const resp = await fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre_usuario, correo, password })
        });

        if (!resp.ok) {
            const errorData = await resp.json();
            alert("Error: " + errorData.error); 
            return;
        }

        const data = await resp.json();
        alert("Usuario registrado correctamente");

        // redirigir
        window.location.href = "index.html";

    } catch (error) {
        alert("Error de conexión con la API");
    }
}

async function login() {
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    try {
        const resp = await fetch("http://localhost:3000/usuarios/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ correo, password })
        });

        const data = await resp.json();

        if (!resp.ok) {
            alert("Error: " + data.error);
            return;
        }

        alert("Inicio de sesión exitoso");

        // 🟢 GUARDAR LA SESIÓN
        localStorage.setItem("usuario", JSON.stringify(data.usuario));

        // REDIRECCIÓN
        window.location.href = "http://localhost:8181/index.html";

    } catch (err) {
        console.log(err);
        alert("Error de conexión con la API");
    }
}

// Mostrar datos del usuario en index
document.addEventListener("DOMContentLoaded", function () {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario) {
        const span = document.getElementById("bienvenida");
        if (span) {
            span.innerText = "Bienvenido, " + usuario.nombre + " 👋";
        }
    }
});

