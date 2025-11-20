 const datosProducto = document.getElementById("datosProducto");
    const preview = document.getElementById("preview");
    const buscarInput = document.getElementById("buscar");
    const btnBuscar = document.getElementById("btnBuscar");

    // Simulación de búsqueda de producto
    btnBuscar.addEventListener("click", () => {
      const valor = buscarInput.value.trim().toLowerCase();
      if (valor === "" || (valor !== "agrex-abc" && valor !== "001")) {
        alert("Producto no encontrado. ");
        datosProducto.classList.add("d-none");
        preview.classList.add("d-none");
        return;
      }

      // Simula producto encontrado
      document.getElementById("nombre").value = "Agrex-ABC Acidificante Antiespumante Agroenzimas 1 Lt";
      document.getElementById("marca").value = "Agroenzymas";
      document.getElementById("descripcion").value = "Agrex-ABC mejora la eficiencia en la aplicación de agroquímicos regulando el pH y reduciendo espuma.";
      document.getElementById("precio").value = 280.00;

      preview.src = "imgs/agrex_abc.png";
      preview.classList.remove("d-none");
      datosProducto.classList.remove("d-none");
    });

    // Confirmación de baja
    document.getElementById("form-baja").addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      if (confirm(`¿Seguro que deseas eliminar el producto "${nombre}" del inventario?`)) {
        alert(` El producto "${nombre}" se eliminó correctamente.`);
        e.target.reset();
        datosProducto.classList.add("d-none");
        preview.classList.add("d-none");
      }
    });