
// Función para generar el resumen de libros comprados
function generarResumen() {
  //agregamos todos los cuadros donde hemos puesto los libros que queremos comprar
    const inputs = Array.from(window.opener.document.getElementsByClassName("cuadro"));
    //Agregamos todos los titulos de los libros, que estan justo al lado de los cuadritos
    const titulos = Array.from(window.opener.document.getElementsByClassName("titulo"));
  
    //cogemos el div donde vamos a mostrar el resumen 
    const resumenDiv = document.getElementById("resumenLibros");

    //Empezamos una lista para mostrar los libros que hemos comprado
    let listaHTML = "<ul>";
  
    //vamos a revisar uno por uno todos los cuadros que hemos puestos
    inputs.forEach((input, index) => {
      //pasamos lo que hemos escrito a numero
      const cantidad = parseInt(input.value);
      //si es mayor que 0, significa que hemos comprado el libro
      if (cantidad > 0) {
        //buscamos el titulo que le corresponde a ese cuadro (estan en el mismo orden)
        const titulo = titulos[index].textContent;
        // añadimos el libro y cuantos queremos a la lista
        listaHTML += `<li>${titulo} - ${cantidad} unidades</li>`;
      }
    });
  
    //cerramos la lista
    listaHTML += "</ul>";
    // metemos la lista dentro del div en esta página
    resumenDiv.innerHTML = listaHTML;
}

  
  // Función para manejar el click en "Explorar más libros"
  function explorarMasLibros(){
    // Mostrar mensaje en la página principal (index.html)
    const librosDiv = window.opener.document.getElementById("libros");
    librosDiv.innerHTML = "<h2>Pedido realizado. Le esperamos pronto.</h2>";
  
    // Cerrar la ventana actual
    window.close();
  }
  
  // Asignar eventos al cargar la página
  window.onload = () => {
    generarResumen();
  
    const volverBtn = document.getElementById("volver");
    volverBtn.addEventListener("click", explorarMasLibros);
  };