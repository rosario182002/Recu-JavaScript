function abrirVentana() {
    let aceptar = confirm("¿Desea abrir una nueva ventana?");
    if (aceptar) {
        let nuevaVentana = window.open("", "ventanita", "width=200,height=80,left=500,top=500,resizable=yes,scrollbars=yes,toolbar=no,location=no,menubar=no");
        if (nuevaVentana) {
            nuevaVentana.document.write("<h1>Entorno cliente</h1>");
        } else {
            alert("No se puede abrir la ventana.");
        }
    }
}