    let cantidadActual = 25;

    const input = document.getElementById("nuevaCantidad");
    const resultado = document.getElementById("resultado");

    document.querySelector(".btn-mas").onclick = () => {
        input.value = Number(input.value) + 1;
    };

    document.querySelector(".btn-menos").onclick = () => {
        if (input.value > 0) input.value = Number(input.value) - 1;
    };

    document.querySelector(".aumentar").onclick = () => {
        resultado.textContent = Number(cantidadActual) + Number(input.value);
    };

    document.querySelector(".disminuir").onclick = () => {
        let nuevo = Number(cantidadActual) - Number(input.value);
        resultado.textContent = nuevo < 0 ? 0 : nuevo;
    };

    document.querySelector(".guardar").onclick = () => {
        alert("Cambios guardados correctamente");
        window.location.href = "inventario.html";
    };
