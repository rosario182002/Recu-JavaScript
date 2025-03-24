//Formato: dd/mm/yyyy
let fecha = new Date();
let dia = fecha.getDate().toString().padStart(2, '0');
let mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); 
let anio = fecha.getFullYear();

document.write(`<b>Formato dd/mm/yyyy:</b> ${dia}/${mes}/${anio}`);


// Formato: Dia de la semana mes día año, en inglés: Ej Mon Sep 30 2024
let formatoIngles = fecha.toDateString();

document.write(`<br><b>Formato en inglés:</b> ${formatoIngles}`);

// Formato: dd/mm/yyyy hh:mm:ss
let horas = fecha.getHours().toString().padStart(2, '0');
let minutos = fecha.getMinutes().toString().padStart(2, '0');
let segundos = fecha.getSeconds().toString().padStart(2, '0');

document.write(`<br><b>Formato dd/mm/yyyy hh:mm:ss </b> : ${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`);

//Formato: hh:mm:ss
document.write(`<br><b>Formato hh:mm:ss :</b> ${horas}:${minutos}:${segundos}`);