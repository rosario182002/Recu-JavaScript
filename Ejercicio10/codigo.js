let numeros = [];
let suma = 0;

//Generamos los números dese el 0 hasta el 20 INCLUIDOS
for(let i = 0; i<=20; i++){
    let numero = Math.floor(Math.random()*(20-0))+0; //Genera el número
    numeros.push(numero);//Agregamos el numero al array
    suma += numero; //Sumamos el número
}

document.write(`<h1>La suma de los números ${numeros} es: ${suma}</h1>`);