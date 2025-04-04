document.getElementById("abrirVentana").addEventListener("click", function () {
    // Abrir una nueva ventana emergente de 400x200
    let nuevaVentana = window.open("", "Ventana Emergente", "width=400,height=200");

    // Escribir un mensaje en la ventana emergente
    nuevaVentana.document.write(`
        <html>
        <head>
            <title>Ventana Emergente</title>
        </head>
        <body>
            <h1>¡Hola! Esta ventana se cerrará automáticamente en 10 segundos.</h1>
        </body>
        </html>
    `);

    // Inicializar la cuenta atrás
    let segundosRestantes = 10;
    let contador = document.getElementById("contador");

    // Actualizar la cuenta atrás en la ventana principal
    let intervalo = setInterval(() => {
        contador.textContent = `La ventana se cerrará en ${segundosRestantes} segundos.`;
        segundosRestantes--;

        // Cuando la cuenta atrás llegue a 0, cerrar la ventana emergente
        if (segundosRestantes < 0) {
            clearInterval(intervalo);
            nuevaVentana.close();
            contador.textContent = "La ventana emergente se ha cerrado.";
        }
    }, 1000);
});