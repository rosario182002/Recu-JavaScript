let fecha = new Date();
let diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let dia = fecha.getDay();

document.write(`<h1>Hoy es: ${diaSemana[dia]}</h1>`);