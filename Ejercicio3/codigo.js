
var error=false;
do{
    var dia = prompt("Dime el dia de tu cumpleaños: ");

    var mes = prompt("Dime el mes de tu cumpleaños: ");

    if (isNaN(dia) || isNaN(mes) || mes <= 0 || mes > 12 || dia < 1 || dia > 31) {
        console.log("Por favor, introduce un día y un mes válidos.");
        error=true;
    }
}while(error);



const anoActual = new Date().getFullYear();
const anoLimite = 2100;

document.write(`Años en que tu cumpleaños caerá en domingo desde ${anoActual} hasta ${anoLimite}:`);

for (let ano = anoActual; ano <= anoLimite; ano++) {
    const fecha = new Date(ano, mes-1, dia);
    if (fecha.getDay() === 0) { // 0 es Domingo 
        document.write(`<br>${ano}`);
    }
}



