let anioActual = new Date().getFullYear();

//Generamos un año aleatorio entre 2000 y el año actual
let anioAleatorio = Math.floor(Math.random() * (anioActual - 2000 + 1)) + 2000;

//Generamos un mes aleatorio (0 = enero, 11 = diciembre)
let mesAleatorio = Math.floor(Math.random() * (12 - 1 + 1)) + 1; 

//Generamos un día aleatorio entre 1 y 28 
const diaAleatorio = Math.floor(Math.random()*28) + 1;

//Creamos la fecha aleatoria
const fechaAleatoria = new Date(anioAleatorio, mesAleatorio, diaAleatorio);

console.log("Fecha aleatoria:" + fechaAleatoria);

document.write("Fecha aleatoria:" + fechaAleatoria);    

alert("Fecha aleatoria:" + fechaAleatoria);

