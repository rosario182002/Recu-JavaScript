let colores = ["orange", "blue"];
let indice = 0;
let temporizador;

function cambiarColor() {
document.body.style.backgroundColor =colores[indice];
indice = (indice +1) % colores.length;
}

temporizador = setInterval(cambiarColor, 1000);


document.getElementById("detener").addEventListener("click", function () {
    clearInterval(temporizador);
});