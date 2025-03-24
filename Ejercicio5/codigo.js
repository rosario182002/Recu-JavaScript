let fechaNacimiento = prompt("Introduce tu fecha de nacimiento en formato dd/mm/yyyy");

//dividimos la fecha en partes
let partes = fechaNacimiento.split("/");
let dia = parseInt(partes[0], 10);
let mes = parseInt(partes[1], 10);
let anio = parseInt(partes[2], 10);


