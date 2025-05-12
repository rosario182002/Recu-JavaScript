document.addEventListener("DOMContentLoaded", function(){

    const inventario = [
        {id: 1, categoria:{tipo: "movil", marca: "Apple"}, nombre: "Iphone 13", descripcion: "Movil de alta gama", cantidad: 15},
        {id:2, categoria:{tipo:"tablet", marca:"Samsung"}, nombre:"Galaxy Tab S7", descripcion:"Tablet de gama alta", cantidad: 10},
        {id:3, categoria:{tipo:"portatil", marca:"Dell"}, nombre:"XPS 13", descripcion:"Portatil de gama alta", cantidad: 5},
        {id:4, categoria:{tipo:"portatil", marca:"HP"}, nombre:"Pavilion 15", descripcion:"Portatil de gama media", cantidad: 8},
        {id:5, categoria:{tipo:"movil", marca:"Xiaomi"}, nombre:"Redmi Note 10", descripcion:"Movil de gama media", cantidad: 20},
        {id:6, categoria:{tipo:"tablet", marca:"Apple"}, nombre:"Ipad Pro", descripcion:"Tablet de alta gama", cantidad: 12},
        {id:7, categoria:{tipo:"portatil", marca:"Lenovo"}, nombre:"ThinkPad X1", descripcion:"Portatil de gama alta", cantidad: 3},
        {id:8, categoria:{tipo:"movil", marca:"Samsung"}, nombre:"Galaxy S21", descripcion:"Movil de gama alta", cantidad: 7},
    ]


    //buscamos en el inventario
    document.getElementById("searchButton").addEventListener("click", function(){
        const id = document.getElementById("searchId").value.trim();
        const  nombre = document.getElementById("searchNombre").value.trim();
        const descripcion = document.getElementById("searchDescripcion").value.trim();
        const cantidad = document.getElementById("searchCantidad").value.trim();

        //Array para almacenar 
        const resultados = [];

        //Recorrer el inventario
        for (let item of inventario) {
            let coincide = true;

            //Verificar cada criterio de busqueda
            if (id !== "" && item.id.toString() !== id) {
                coincide = false;
            }
            if (nombre !== "" && !item.nombre.toLowerCase().includes(nombre.toLowerCase())) {
                coincide = false;
            }
            if (descripcion !== "" && !item.descripcion.toLowerCase().includes(descripcion.toLowerCase())) {
                coincide = false;
            }
            if (cantidad !== "" && item.cantidad.toString() !== cantidad) {
                coincide = false;
            }

            //Si cumple todos los criterios, agregar al array de resultados
            if (coincide) {
                resultados.push(item);
            }
        }
        mostrarResultados(resultados);

    });

    // Función para mostrar los resultados en una tabla
    function mostrarResultados(resultados) {
        const divResultado = document.getElementById("resultado");
        const divMensaje = document.getElementById("mensaje");

        // Limpiar resultados previos
        divResultado.innerHTML = "";
        divMensaje.innerHTML = "";

        if (resultados.length === 0) {
            divMensaje.innerHTML = "No existen productos para mostrar.";
            divMensaje.style.color = "red";
            divMensaje.style.fontWeight = "bold";
            return;
        }

        // Crear la tabla
        const tabla = document.createElement("table");
        tabla.classList.add("table", "table-bordered");

        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        // Crear la cabecera
        thead.innerHTML = `
            <tr>
                <th>Vender</th>
                <th>ID</th>
                <th>Tipo</th>
                <th>Nombre</th>
                <th>Cantidad</th>
            </tr>
        `;

        // Crear las filas
        resultados.forEach(producto => {
            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td><a href="#" class="text-success vender-enlace">Vender Todo</a></td>
                <td>${producto.id}</td>
                <td>${producto.categoria.tipo}</td>
                <td>${producto.nombre}</td>
                <td class="cantidad">${producto.cantidad}</td>
            `;

            // Añadir evento para cambiar el fondo al pasar el ratón
            fila.addEventListener("mouseover", () => {
                fila.style.backgroundColor = "#ddeeac";
            });
            fila.addEventListener("mouseout", () => {
                fila.style.backgroundColor = "";
            });

            // Añadir evento para el enlace "Vender Todo"
            fila.querySelector(".vender-enlace").addEventListener("click", (e) => {
                e.preventDefault();
                abrirVentanaVender(producto, fila);
            });

            tbody.appendChild(fila);
        });

        // Añadir la cabecera y el cuerpo a la tabla
        tabla.appendChild(thead);
        tabla.appendChild(tbody);
        divResultado.appendChild(tabla);
    }

    // Función para abrir la subventana de "Vender Todo"
    function abrirVentanaVender(producto, fila) {
        const ventana = window.open("", "Vender Producto", "width=600,height=600");

        ventana.document.write(`
            <html>
            <head>
                <title>Vender Producto</title>
            </head>
            <body>
                <h2>ID: ${producto.id}</h2>
                <p><strong>Descripción:</strong> ${producto.descripcion}</p>
                <p><strong>Marca:</strong> ${producto.categoria.marca}</p>
                <button id="venderButton">Vender</button>
            </body>
            </html>
        `);

        // Añadir funcionalidad al botón "Vender"
        ventana.document.getElementById("venderButton").addEventListener("click", () => {
            producto.cantidad = 0; // Actualizar la cantidad a 0
            fila.querySelector(".cantidad").textContent = "0"; // Actualizar la tabla
            ventana.close(); // Cerrar la subventana
        });
    }

});