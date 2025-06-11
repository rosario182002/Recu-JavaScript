document.addEventListener("DOMContentLoaded", function(){

    const contenedor = document.getElementById("contenedor"); // Coge el elemento id contenedor
    let estado = true; //indica si es true betis o false sevilla
    let contador= 0; // contador para saber cuantas veces ha cambiado el color

    const intervalo = setInterval(() => { //hace que cada segundo cambie el color y el texto
        if(estado){//si es true, el color es verde y el texto Betis
            contenedor.style.backgroundColor = 'green';
            contenedor.style.color = 'white';
            contenedor.innerHTML = 'Betis';
        }else{//si es false, el color es rojo y el texto Sevilla
            contenedor.style.backgroundColor = 'red';
            contenedor.style.color = 'white';
            contenedor.innerHTML = 'Sevilla';
        
        }
        estado = !estado; //cambia el estado, si es true pasa a false y viceversa
        contador++;//incrementa el contador
        if(contador === 5){// si el contador llega a 5, se para el intervalo y se redirige a ppal.html
            clearInterval(intervalo);//para el intervalo
            contenedor.style.display = 'none';//oculta el contenedor
            window.location.href = 'ppal.html';//redirige a ppal.html
        }

    }, 1000);// cada 1000 milisegundos (1 segundo)

});