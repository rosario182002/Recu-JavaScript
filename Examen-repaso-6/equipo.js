var resumenWindow; // Ventana emergente donde se mostrará el resumen
window.jugadores = []; // Array global para almacenar los jugadores

// Esperar a que todo el HTML esté cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("equipoForm"); // Obtener el formulario
  const tabla = document
    .getElementById("tablaEquipo")
    .getElementsByTagName("tbody")[0]; // Obtener el cuerpo de la tabla donde se añadirán los jugadores
  const botonResumen = document.getElementById("resumen"); // Botón para mostrar el resumen
  const botonAñadir = document.getElementById("mas"); // Botón para añadir más jugadores

  // Cuando se envía el formulario (se hace clic en "Añadir")
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario

    // Obtener los valores ingresados en el formulario
    const jugador = document.getElementById("jugador").value;
    const equipo = document.getElementById("equipo").value;
    const dorsal = parseInt(document.getElementById("dorsal").value);

    // Validar que todos los campos estén completos
    if (!jugador || !equipo || isNaN(dorsal)) {
      alert("Por favor, completa todos los campos.");
      return; // Salir de la función si hay campos vacíos
    }

    // Validar que el dorsal esté entre 1 y 20
    if (dorsal < 1 || dorsal > 20) {
      alert("El dorsal debe estar entre 1 y 20.");
      return;
    }

    // Validar que el dorsal no esté repetido
    for (let i = 0; i < jugadores.length; i++) {
      if (jugadores[i].dorsal === dorsal) {
        alert("El dorsal ya está en uso. Por favor, elige otro.");
        return;
      }
    }

    // Validar que no haya más de 5 jugadores
    if (jugadores.length >= 5) {
      alert("Ya se han añadido 5 jugadores.");
      return;
    }

    // Agregar el jugador al array global
    jugadores.push({ nombre: jugador, equipo: equipo, dorsal: dorsal });

    // Crear una nueva fila para mostrar al jugador en la tabla
    const fila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = jugador;
    fila.appendChild(celdaNombre);

    const celdaEquipo = document.createElement("td");
    celdaEquipo.textContent = equipo;
    fila.appendChild(celdaEquipo);

    const celdaDorsal = document.createElement("td");
    celdaDorsal.textContent = dorsal;
    fila.appendChild(celdaDorsal);

    // Añadir la fila a la tabla
    tabla.appendChild(fila);

    // Limpiar los campos del formulario para ingresar un nuevo jugador
    document.getElementById("jugador").value = "";
    document.getElementById("equipo").value = "";
    document.getElementById("dorsal").value = "";

    // Si ya hay 5 jugadores añadidos
    if (jugadores.length === 5) {
      botonAñadir.disabled = true; // Desactivar el botón de añadir más
      botonResumen.disabled = false; // Activar el botón de resumen
      alert("Equipo completo. Has añadido 5 jugadores.");

      // Esto es cuando ya tiene los 5 jugadores que se habilita el botón resumen
      botonResumen.addEventListener("click", irResumen); // Añadir evento al botón resumen
    }
  });
});

// Función que se ejecuta al hacer clic en el botón de resumen
irResumen = () => {
  sevilla = 0; // Contador de jugadores del Sevilla
  betis = 0;   // Contador de jugadores del Betis

  // Recorrer los jugadores y contar cuántos hay de cada equipo
  jugadores.forEach((jugador) => {
    if (jugador.equipo === "Sevilla") {
      sevilla++;
    } else if (jugador.equipo === "Betis") {
      betis++;
    }
  });

  // Abrir la página resumen.html en una nueva ventana
  resumenWindow = window.open(
    "resumen.html",        // URL de la página a abrir
    "_blank",              // Abrir en una pestaña/ventana nueva
    "width=300px;height=300px" // Tamaño de la ventana
  );

  // Cuando la ventana resumen termine de cargar su contenido, ejecutar muestraResumen
  resumenWindow.addEventListener("DOMContentLoaded", muestraResumen);
};

// Función para mostrar el resumen en la nueva ventana
muestraResumen = () => {
  // Escribir el número de jugadores del Sevilla en el elemento con id "sevilla"
  resumenWindow.document.getElementById(
    "sevilla"
  ).textContent = `Jugadores del Sevilla: ${sevilla}`;

  // Escribir el número de jugadores del Betis en el elemento con id "betis"
  resumenWindow.document.getElementById(
    "betis"
  ).textContent = `Jugadores del Betis: ${betis}`;

  // Obtener el botón "volver" en la ventana resumen
  let botonVolver = resumenWindow.document.getElementById("volver");
  botonVolver.addEventListener("click", function () {
    // Cerrar la ventana actual cuando se hace clic en "volver"
    resumenWindow.close();
  });
};

