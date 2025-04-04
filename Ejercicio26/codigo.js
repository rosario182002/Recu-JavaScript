function abrirVentana() {
    let segundos = document.getElementById("segundos").value;
    if (segundos < 1) {
        alert("Ingrese un número válido mayor a 0");
        return;
    }

    let ventana = window.open("emergente.html", "", "width=300,height=200");

    setTimeout(() => {
        if (!ventana.closed) {
            ventana.close();
            document.getElementById("resultado").innerText = `Ya han pasado ${segundos} segundos y se ha cerrado la ventana emergente.`;
        }
    }, segundos * 1000);

    ventana.onload = function () {
        ventana.postMessage(segundos, "*");
    };
}