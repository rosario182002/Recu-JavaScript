let fecha = new Date();
let anioCompleto = fecha.getFullYear();
let ultimoDigito = anioCompleto %100; // Obtengo el último dígito del año

document.write(`<h1>El último dígito del año ${anioCompleto} es: ${ultimoDigito}</h1>`);
