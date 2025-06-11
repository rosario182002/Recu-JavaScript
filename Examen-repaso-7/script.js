window.addEventListener("DOMContentLoaded",()=>{

    let numeroAleatorio = Math.floor(Math.random() * 50) + 1;
    let inicio = Date.now();
    let juegoterminado = false;


    const input = document.getElementById("inputNumero");
    const boton = document.getElementById("botonAdivinar");
    const mensaje = document.getElementById("mensaje");

    //Temporizador de 15s que tienes para adivinar el numero através del input
    const temporizador = setInterval(() => {
        //si ha terminado los 15s muestra el mensesja de tiempo agotado
    if(!juegoterminado){
        mensaje.textContent = `¡Tiempo agotado! El numero correcto era ${numeroAleatorio}.`;
        boton.disabled = true; // desactiva el botón
        input.value =""; // limpia el input
        juegoterminado = true; // marca el juego como terminado
    }
    }, 15000);

    boton.addEventListener("click", () => {
        //si el juego ya ha terminado, no hacer nada
        if(juegoterminado) return;

        //obtenemos el valor del input como numero entero
        const valor = parseInt(input.value);

        //Si no se ha introducido un numero valido, salir
        if(isNaN(valor)) return;

        //Calculamos el tiempo transcurrido desde el inicio del juego
        const tiempoTrasncurrido = Math.floor((Date.now() -inicio)/1000);

        //Si el numero es correcto, mostramos el mensaje de victoria
        if(valor === numeroAleatorio){
            mensaje.textContent = `¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${tiempoTrasncurrido} segundos.`;
            clearInterval(temporizador); // detiene el temporizador
            juegoterminado = true;  // marca el juego como terminado
            boton.disabled = true; // desactiva el botón
            input.value =""; // limpia el input
        }else{
            //Si el numero es incorrecto, mostramos un mensaje de error
            if(valor < numeroAleatorio){
                mensaje.textContent = `El número es mayor que ${valor}. Inténtalo de nuevo.`;
            }else{
                mensaje.textContent = `El número es menor que ${valor}. Inténtalo de nuevo.`;
            }
        }
    
    });
});