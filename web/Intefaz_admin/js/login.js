// Capturamos el formulario
const form = document.getElementById("loginForm");

// Escuchamos el evento "submit"
form.addEventListener("submit", function(event) {
    event.preventDefault(); // evita que el formulario se recargue

    const usuario = document.getElementById("administrador").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    if(usuario !== "" && contraseña !==""){
        window.location.href='index.html';
    } else {
        alert("Por favor, completa todos los campos antes de continuar.");
    }
});