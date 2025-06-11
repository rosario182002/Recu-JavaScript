// Esperamos que toda la página esté cargada para empezar a trabajar
window.addEventListener("DOMContentLoaded", () => {
  let alumnos = []; // Aquí guardamos todos los alumnos como objetos

  // Obtenemos todos los elementos del HTML necesarios
  const botonAgregar = document.getElementById("agregar");
  const botonEstadisticas = document.getElementById("mostrarEstadisticas");
  const tabla = document.getElementById("tablaAlumnos");
  const tablaBody = tabla.getElementsByTagName("tbody")[0];
  const botonEj3 = document.getElementById("ej3");
  const divMensaje = document.getElementById("mensaje");

  // Cuando hacemos clic en "Agregar Alumno"
  botonAgregar.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    const nombre = document.getElementById("nombre").value.trim(); // Nombre del alumno
    const clasificacion = document.getElementById("calificacion").value; // Nota

    // Buscamos qué radio button está marcado para saber la asignatura
    const radios = document.getElementsByName("asignatura");
    let asignaturaSeleccionada = null;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        asignaturaSeleccionada = radios[i].value;
        break;
      }
    }

    // Si falta algún dato, mostramos alerta
    if (!nombre || !asignaturaSeleccionada || clasificacion === "") {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    // Creamos un objeto alumno y lo añadimos al array
    const alumno = {
      nombre,
      asignatura: asignaturaSeleccionada,
      clasificacion: Number(clasificacion)
    };
    alumnos.push(alumno);

    // Creamos una nueva fila en la tabla con los datos del alumno
    const fila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;
    if (alumno.clasificacion < 5) {
      celdaNombre.style.color = "red"; // Si suspende, el nombre va en rojo
    }

    const celdaAsignatura = document.createElement("td");
    celdaAsignatura.textContent = asignaturaSeleccionada;

    const celdaClasificacion = document.createElement("td");
    celdaClasificacion.textContent = clasificacion;

    const celdaEliminar = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    // Si hacen clic en "Eliminar", borramos al alumno y su fila
    botonEliminar.addEventListener("click", () => {
      alumnos = alumnos.filter(a => a !== alumno);
      fila.remove();
      if (alumnos.length < 4) {
        botonEstadisticas.disabled = true; // Desactivamos botón si hay menos de 4 alumnos
      }
    });

    // Añadimos todo a la fila
    celdaEliminar.appendChild(botonEliminar);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaAsignatura);
    fila.appendChild(celdaClasificacion);
    fila.appendChild(celdaEliminar);

    tablaBody.appendChild(fila); // Añadimos la fila a la tabla

    if (alumnos.length >= 4) {
      botonEstadisticas.disabled = false; // Activamos estadísticas si hay 4 o más
    }

    // Limpiamos los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
    for (let i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
  });

  // Botón Mostrar Estadísticas
  botonEstadisticas.addEventListener("click", () => {
    let sumaNotas = 0;
    let suspensos = 0;

    // Recorremos los alumnos y sumamos notas, contamos suspensos
    for (const alumno of alumnos) {
      sumaNotas += alumno.clasificacion;
      if (alumno.clasificacion < 5) {
        suspensos++;
      }
    }

    // Mostramos los datos con una alerta
    alert(`Estadísticas:\nSuma total de notas: ${sumaNotas}\nNúmero de suspensos: ${suspensos}`);
  });
// Botón "Ejercicio 3"
botonEj3.addEventListener("click", () => {
  // Obtener el valor del input con id "nombre" y quitar espacios al inicio/final
  const nombre = document.getElementById("nombre").value.trim();

  // Obtener la calificación como número decimal
  const clasificacion = parseFloat(document.getElementById("calificacion").value);

  // Obtener todos los radio buttons con name "asignatura"
  const radios = document.getElementsByName("asignatura");
  let asignaturaSeleccionada = null;

  // Buscar cuál radio está seleccionado
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      asignaturaSeleccionada = radios[i].value;
      break; // Ya encontró el seleccionado, puede salir del bucle
    }
  }

  // Validar que todos los campos estén completos: nombre, asignatura y calificación
  if (!nombre || !asignaturaSeleccionada || isNaN(clasificacion)) {
    alert("Todos los campos deben ser completados");
    return; // Sale de la función si algo está mal
  }

  // Abrir una nueva ventana sin contenido, con tamaño definido
  const nuevaVentana = window.open("", "", "width=400,height=400");

  // Crear un mensaje personalizado según la calificación
  let mensaje = "";
  if (clasificacion < 5) {
    mensaje = "Necesitas mejorar"; // Nota baja
  } else if (clasificacion > 8) {
    mensaje = "¡Excelente trabajo!"; // Nota alta
  } else {
    mensaje = "¡Sigue esforzándote!"; // Nota media
  }

  // Escribir contenido HTML en la nueva ventana
  nuevaVentana.document.write(`<h2>Información del Alumno</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Asignatura:</strong> ${asignaturaSeleccionada}</p>
    <p><strong>Calificación:</strong> ${clasificacion}</p>
    <p style="color:blue"><strong>Mensaje:</strong> ${mensaje}</p>`);

  // Esperar 5 segundos para cerrar la ventana nueva y mostrar un mensaje en la principal
  setTimeout(() => {
    nuevaVentana.close(); // Cerrar ventana emergente

    // Obtener la fecha y hora actual como cadena legible
    const fecha = new Date().toLocaleString();

    // Mostrar mensaje en el div "divMensaje"
    divMensaje.innerText = `Consultados los datos del alumno ${nombre} a las ${fecha}`;
    divMensaje.style.color = "blue"; // El mensaje debe mostrarse en azul
  }, 5000); // Espera 5000 milisegundos = 5 segundos
});
});



