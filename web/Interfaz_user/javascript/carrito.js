 // JS carrito dinámico
        const contenedor = document.getElementById('contenedor-carrito');
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        function renderizarCarrito() {
            contenedor.innerHTML = '';
            if (carrito.length === 0) {
                contenedor.innerHTML = '<p>Tu carrito está vacío.</p>';
                document.querySelector('.resumen-compra .total').innerText = '$0.00';
                return;
            }

            let total = 0;

            carrito.forEach((producto, index) => {
                const subtotal = producto.precio * producto.cantidad;
                total += subtotal;

                const div = document.createElement('div');
                div.className = 'item-carrito';
                div.innerHTML = `
                    <img src="${producto.img}" alt="${producto.nombre}">
                    <div class="info-producto-carrito">
                        <h3>${producto.nombre}</h3>
                        <p>Precio: $${producto.precio.toFixed(2)}</p>
                        <div class="cantidad">
                            <label>Cantidad:</label>
                            <input type="number" min="1" value="${producto.cantidad}" data-index="${index}" class="input-cantidad">
                        </div>
                    </div>
                    <div class="acciones-item">
                        <p class="subtotal">Subtotal: $${subtotal.toFixed(2)}</p>
                        <button class="btn-eliminar" data-index="${index}">Eliminar</button>
                    </div>
                `;
                contenedor.appendChild(div);
            });

            const envio = 40; 
            const totalFinal = total + envio;

            document.querySelector('.resumen-compra p:nth-child(2) span').innerText = `$${total.toFixed(2)}`;
            document.querySelector('.resumen-compra p:nth-child(3) span').innerText = `$${envio.toFixed(2)}`;
            document.querySelector('.resumen-compra .total').innerText = `$${totalFinal.toFixed(2)}`;

            agregarEventos();
        }

        function agregarEventos() {
            // Eliminar productos
            document.querySelectorAll('.btn-eliminar').forEach(btn => {
                btn.addEventListener('click', () => {
                    const index = btn.getAttribute('data-index');
                    carrito.splice(index, 1);
                    localStorage.setItem('carrito', JSON.stringify(carrito));
                    renderizarCarrito();
                });
            });

            // Cambiar cantidad
            document.querySelectorAll('.input-cantidad').forEach(input => {
                input.addEventListener('change', () => {
                    const index = input.getAttribute('data-index');
                    const cantidad = parseInt(input.value);
                    carrito[index].cantidad = cantidad;
                    localStorage.setItem('carrito', JSON.stringify(carrito));
                    renderizarCarrito();
                });
            });
        }

        renderizarCarrito();

        // Botón finalizar compra
        document.querySelector('.btn-finalizar').addEventListener('click', () => {
            window.location.href = 'pago.html';
        });