//Creamos el numero aleatorio
var aleatorio = Math.floor(Math.random()*(10-1 + 1))+1;

console.log(aleatorio);

var error=false;

var numero = prompt("Dime un numero: ");
do{
if (numero >= 1 && numero <= 10) {
    if (numero == aleatorio) {
        alert("¡Felicidades, adivinaste el número!");
    } else {
      numero = prompt(`Dime un numero: `);
        error=true;
    }
} else {
    alert("Por favor, introduce un número entre el 1 y el 10.");
}
}while(error)