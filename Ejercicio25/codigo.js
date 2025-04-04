function abrirVentana() {
    let segundos = document.getElementById("segundos").value;
    if (segundos < 1) {
        alert("Ingrese un número válido mayor a 0");
        return;
    }

    let ventana = window.open("", "", "width=300,height=200");
    ventana.document.write("<h2>Cuenta atrás</h2><p id='cuenta'></p>");

    let cuenta = segundos;
    let intervalo = setInterval(() => {
        if (ventana.closed) {
            clearInterval(intervalo);
            return;
        }

        ventana.document.getElementById("cuenta").innerText = `Cerrando en ${cuenta} segundos...`;
        cuenta--;

        if (cuenta < 0) {
            ventana.close();
            clearInterval(intervalo);
            document.getElementById("resultado").innerText = `Ya han pasado ${segundos} segundos y se ha cerrado la ventana emergente.`;
        }
    }, 1000);
}