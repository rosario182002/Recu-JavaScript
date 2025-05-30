document.addEventListener("DOMContentLoaded", function(){
    // Que este deshabilirado el boton de alquilar
    const botonAlquilar = document.getElementById("alquilar");
    botonAlquilar.disabled = true;

    //En el div saludos se deebe mostrar el mensaje:
   const saludo = document.getElementById("saludo");
   const hoy = new Date();
   // array de los meses del año
   const meses = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

// Formatear la fecha
const fechaFormato = `${hoy.getDate()} de ${meses[hoy.getMonth()]} de ${hoy.getFullYear()}`;

// Mostrar el saludo
saludo.textContent = `¡Bienvenido! Hoy es ${fechaFormato}.`;


//B crear un array de 5 peliculas
const peliculas = [
    "El Padrino", 
    "Forrest Gump", 
    "La Lista de Schindler", 
    "Fast & Furious 9", 
    "Lilo y Stitch"
];

//C funcion  para recomendar
function recomendar(){
    const peliculasDiv = document.getElementById("resultado");
    peliculasDiv.innerHTML = "<b>Esperando...</b>";

    //esperamos 5 segundos a que salga la recomendacion 
    setTimeout(() => {
        //Generar un numero aleatorio entre 0 y 4
        const indiceAleatorio = Math.floor(Math.random() * peliculas.length);
        //Obtenemos la pelicula seleccionada
        const peliculaSeleccionada = peliculas[indiceAleatorio];
        
        //Mostrar el mensaje de recomendacion
       if(indiceAleatorio === peliculas.length - 1){
        peliculaSeleccionada.innerHTML =`<h2>Oferta del dia: ${peliculaSeleccionada}</h2>`;
       }
       else{    
        peliculaSeleccionada.innerHTML = `<h2>Ofertón del día: ${peliculaSeleccionada}</h2>`;
       }
    }, 5000);
}
    //Asignamos la funcion al boton
    const botonRecomendar = document.getElementById("recomendar");
    botonRecomendar.addEventListener("click", recomendar);
});