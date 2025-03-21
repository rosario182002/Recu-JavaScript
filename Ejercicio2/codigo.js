 // Fecha actual
 const hoy = new Date();

 // Año actual
 let año = new Date().getFullYear()+1;

 // Fecha del 30 de junio del próximo año (meses en JS van de 0 a 11, por eso junio es 5)
 const finDeCurso = new Date(año, 5, 30);

 // Diferencia en milisegundos entre las dos fechas
 const diferenciaMilisegundos = finDeCurso - hoy;

 // Convertir de milisegundos a días (1 día = 24 * 60 * 60 * 1000 ms)
 const diasRestantes = Math.floor(diferenciaMilisegundos / (24 * 60 * 60 * 1000));

 document.write(`<h1>Quedan ${diasRestantes} días hasta el 30 de junio de 2026.</h1>`);