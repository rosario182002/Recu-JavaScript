document.getElementById("abrirVentana").addEventListener("click", function () {
    // Abrir una nueva ventana de 600x600
    let nuevaVentana = window.open("", "Selector de Color", "width=600,height=600");

    // Solicitar el color al usuario en la ventana emergente
    nuevaVentana.document.write(`
        <script>
            let color = prompt("Introduce un color (por ejemplo: red, #3498db):");
            if (color) {
                window.opener.document.body.style.backgroundColor = color;
            }
            window.close();
        <\/script>
    `);
});