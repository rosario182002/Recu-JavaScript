let fechaNacimiento = prompt("Introduce tu fecha de nacimiento en formato dd/mm/yyyy");

//dividimos la fecha en partes
let partes = fechaNacimiento.split("/");
let dia = parseInt(partes[0], 10);
let mes = parseInt(partes[1], 10);
let anio = parseInt(partes[2], 10);

//Creamos la fecha de nacimiento
let fechaNac = new Date(anio, mes-1, dia); // le restamos 1 por que los meses empiezan en 0

let fechaActual = new Date();

let edad = fechaActual.getFullYear() - fechaNac.getFullYear(); //Calculamos la edad

//Ajustamos la edad si el cumple aun no ha pasado
let mesActual = fechaActual.getMonth();
let diaActual = fechaActual.getDate();

if(mesActual < (mes-1) || (mesActual === (mes-1) && diaActual < dia)){
    edad--;
}

document.write(`<h1>Tu edad es: ${edad} años</h1>`);
