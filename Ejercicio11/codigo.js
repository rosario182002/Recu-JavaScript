let nombre = prompt("Introduce tu nombre");

let fecha = new Date();
let hora = new Date().getHours();

let saludo = "";

if(hora >=7 && hora<12){
    saludo = "Buenos días";
}else if(hora >=12 && hora<20){
    saludo = "Buenas tardes";
}else{
    saludo = "Buenas noches";
}

alert(saludo + " " + nombre);