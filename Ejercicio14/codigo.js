let numeros = Math.floor(Math.random()*(20-10 + 1)) +10;

let intentos = 0;
let adivinado = false;

while(!adivinado){
    let intento = parseInt(prompt("Adivina el número entre 10 y 20"));
    intentos++;
    if(intento === numeros){
        adivinado = true;
        alert(`¡Enhorabuena! Has adivinado el número en ${intentos} intentos`);
        document.write(`<h1>¡Enhorabuena! Has adivinado el número en ${intentos} intentos</h1>`);
    }else if( intento < numeros){
        alert("El número es mayor. Intentalo de nuevo");
    }else{
        alert("El número es menor. Intentalo de nuevo");
    }
}

