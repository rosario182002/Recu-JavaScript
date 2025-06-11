// Crear un intervalo que muestra un mensaje cada 2 segundos
let mensaje = setInterval(() => {
    console.log("En un lugar de la mancha ");
}, 2000);

// Función para detener el intervalo anterior
function parar() {
    clearInterval(mensaje); // Detiene el intervalo de 'mensaje'
    console.log("Parando el mensaje...");
}

// Función que espera 3 segundos, muestra un mensaje y llama a 'parar'
function mensaje3Segundos() {
    setTimeout(() => {
        console.log("Han pasado 3 segundos");
        parar(); // Llama a la función para detener el intervalo
    }, 3000); // Espera 3 segundos (3000 milisegundos)
}

// Función para abrir una ventana nueva y mostrar un reloj en tiempo real
function abrirReloj() {
    // Abre una nueva ventana con tamaño 300x300 y nombre "reloh"
    let nuevaVentana = window.open("", "reloh", "width=300,height=300");

    // Escribe el contenido HTML básico en la nueva ventana
    nuevaVentana.document.write(`
        <html>
        <head>
            <title>Reloj</title>
        </head>
        <body>
            <p id="reloj" style="font-size: 24px; text-align: center;"></p>
        </body>
        </html>
    `);

    // Función que actualiza el contenido del reloj con la hora actual
    function actualizarReloj() {
        let ahora = new Date(); // Obtener la fecha y hora actual
        let hora = ahora.getHours().toString().padStart(2, "0");     // Hora con dos dígitos
        let minutos = ahora.getMinutes().toString().padStart(2, "0"); // Minutos con dos dígitos
        let segundos = ahora.getSeconds().toString().padStart(2, "0"); // Segundos con dos dígitos

        // Escribir la hora actual en el elemento con id "reloj" en la nueva ventana
        nuevaVentana.document.getElementById("reloj").innerText = `${hora}:${minutos}:${segundos}`;
    }

    // Actualizar el reloj cada 1 segundo
    let relojIntervalo = setInterval(actualizarReloj, 1000);

    // Después de 5 segundos, parar el reloj (dejar de actualizar)
    setTimeout(() => {
        clearInterval(relojIntervalo); // Detiene el intervalo del reloj
        console.log("Parando el reloj...");
    }, 5000);

    // Después de 10 segundos, cerrar la ventana del reloj
    setTimeout(() => {
        nuevaVentana.close(); // Cierra la nueva ventana
        console.log("Ventana cerrada.");
    }, 10000);
}
