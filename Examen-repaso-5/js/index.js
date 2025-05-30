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
       if(indiceAleatorio === 0){
        peliculasDiv.innerHTML =`<h2>Oferta del dia: ${peliculaSeleccionada}</h2>`;
       }
       else{    
        peliculasDiv.innerHTML = `<h2>Ofertón del día: ${peliculaSeleccionada}</h2>`;
       }
    }, 5000);
}
    //Asignamos la funcion al boton
    const botonRecomendar = document.getElementById("recomendar");                             
    botonRecomendar.addEventListener("click", recomendar);

//D) funcionalidad de Mostrar Peliculas

function mostrarPeliculas(){
    const pelicula = document.getElementById("resultado");
    //Crear la tabla
    let tablaHTML = "<table border='1' >";

    //Agregamos las filas con los titulos
    peliculas.forEach((titulo, index) => {
        tablaHTML += `
        <tr> 
            <td class="titulo">${index+1}. ${titulo}</td>
            <td><input type="text" value="0" class="cuadro"></td>
        </tr>
        `;
    });
    //Cerrar la tabla
    tablaHTML += "</table>";
    //Insertar la tabla en el div
    pelicula.innerHTML = tablaHTML;

    //Habilitar el boton de alquilar
    const botonAlquilar = document.getElementById("alquilar");
    botonAlquilar.disabled = false;
} 

//Asignar la funcion al boton con id="mostrarPeliculas"
const botonMostrarPeliculas = document.getElementById("mostrarPeliculas");
botonMostrarPeliculas.addEventListener("click", mostrarPeliculas);



//E) Funcionalidad de alquilar peliculas
function alquilar(){
    //obtenemos TODOS los inputs de la tabla
    const inputs = Array.from(document.getElementsByClassName("cuadro"));
    let haypelis = false;

    //Verificamos si hay alguna pelicula seleccionada
    inputs.forEach(inputs =>{
        if(parseInt(inputs.value)>0){
            haypelis = true;
        }
    });
    if(!haypelis){
        //Mostramos la alerta si no hay libros seleccionados
        alert("No hay ningún libro que comprar");
        return;
    }
    //F ABRIMOS LA NUEVA VENTANA QUE ES RESUMEN.JS
    window.open("resumen.html", "Resume", "witdh=600,height=500");
}

botonAlquilar.addEventListener("click", alquilar);


});

