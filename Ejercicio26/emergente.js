window.addEventListener("message", function(event) {
    let segundos = event.data;
    let cuentaAtras = document.getElementById("cuentaAtras");

    let intervalo = setInterval(() => {
        if (segundos <= 0) {
            clearInterval(intervalo);
            return;
        }
        cuentaAtras.innerText = `Cerrando en ${segundos} segundos...`;
        segundos--;
    }, 1000);
});