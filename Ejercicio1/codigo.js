var fecha = new Date();
var cumple = new Date(2002, 10, 18);


document.write("<strong> Fecha de hoy: </strong>" + fecha);
document.write("<br/><strong>Fecha de mi cumple: </strong> " + cumple);

fecha.setFullYear(2024);
document.write("<br/><strong>Fecha cambiada (forma 1): </strong>" + fecha);

fecha.setFullYear(new Date().getFullYear()-1);
document.write("<br/><strong>Fecha cambiada (forma 2): </strong>" + fecha);

var dia = fecha.getDate();
var mes = parseInt(fecha.getMonth())+1;
var ano = fecha.getFullYear();

document.write(`<br><strong>Fecha bonita: </strong>${dia}/ ${mes}/${ano}`); 