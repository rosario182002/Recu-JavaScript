
// Función para generar el resumen de libros comprados
function generarResumen() {
    // Obtener los inputs y títulos de la página principal (index.html)
    const openerInputs = window.opener.document.getElementsByClassName("cuadro");
    const openerTitulos = window.opener.document.getElementsByClassName("titulo");
  
    const resumenDiv = document.getElementById("resumenLibros");
    let listaHTML = "<ul>";
  
    // Recorrer los inputs y generar la lista de libros comprados
    openerInputs.forEach((input, index) => {
      const cantidad = parseInt(input.value);
      if (cantidad > 0) {
        const titulo = openerTitulos[index].textContent;
        listaHTML += `<li>${titulo} - ${cantidad} unidades</li>`;
      }
    });
  
    listaHTML += "</ul>";
    resumenDiv.innerHTML = listaHTML;
  }
  
  // Función para manejar el clic en "Explorar más libros"
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