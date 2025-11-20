const fotoInput = document.getElementById("foto");
    const preview = document.getElementById("preview");

    // Vista previa
    fotoInput.addEventListener("change", () => {
      const archivo = fotoInput.files[0];
      if (archivo) {
        const reader = new FileReader();
        reader.onload = (e) => {
          preview.src = e.target.result;
        };
        reader.readAsDataURL(archivo);
      }
    });

    // Confirmación
    document.getElementById("form-producto").addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      alert(`✅ El producto "${nombre}" se guardó correctamente.`);
      e.target.reset();
      preview.src = "imgs/agrex_abc.png";
    });


// const formAlta = document.getElementById("form-producto");
// const tabla = document.querySelector("#tabla-inventario tbody");
// const fotoInput = document.getElementById("foto");
// const preview = document.getElementById("preview");
// const alerta = document.getElementById("alerta");

// let inventario = [];

// // Mostrar vista previa al seleccionar la foto
// fotoInput.addEventListener("change", () => {
//   const archivo = fotoInput.files[0];
//   if (archivo) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       preview.src = e.target.result;
//       preview.classList.remove("d-none");
//     };
//     reader.readAsDataURL(archivo);
//   } else {
//     preview.src = "";
//     preview.classList.add("d-none");
//   }
// });

// // Alta de producto
//  formAlta.addEventListener("submit", (e) => {

//   // Evitar duplicados
//   if (inventario.some(p => p.codigo === codigo)) {
//     alert("El código ya existe en el inventario.");
//     return;
//   }

//   // Tomar imagen actual de la vista previa (si hay)
//   const imagenURL = preview.src && !preview.classList.contains("d-none") ? preview.src : null;

//   // Limpiar formulario y vista previa
//   formAlta.reset();
//   preview.src = "";
//   preview.classList.add("d-none");

//    alert(`Producto agregado correctamente ✅`, "success");
// });