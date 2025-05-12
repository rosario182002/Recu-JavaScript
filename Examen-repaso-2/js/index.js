document.addEventListener("DOMContentLoaded", function () {
// las incidencias
const incidencias =[

    {id: 1, estado:"Abierta", asunto: "Error en la página de inicio", descripcion: "No carga correctamente", detalles: {prioridad: "Alta", usuario: "Juan"} },
    {id: 2, estado:"Cerrada", asunto: "Problema con el formulario de contacto",descripcion: "No envía los datos", detalles: {prioriddad: "Media", usuario: "Ana"} },
    {id: 3, estado:"Pendiente", asunto: "Fallo en la base de datos",descripcion: "Datos corruptos", detalles: {prioridad: "Baja", usuario: "Pedro"} },
    { id: 4, estado: "Abierta", asunto: "Problema de red", descripcion: "Conexión lenta", detalles: { prioridad: "Baja", usuario: "Marta" } },
    { id: 5, estado: "Cerrada", asunto: "Error en aplicación", descripcion: "La aplicación se cierra", detalles: { prioridad: "Alta", usuario: "Carlos" } },
    { id: 6, estado: "Pendiente", asunto: "Problema con impresora", descripcion: "No imprime correctamente", detalles: { prioridad: "Media", usuario: "Sofía" } },
    { id: 7, estado: "Abierta", asunto: "Error en base de datos", descripcion: "Datos corruptos", detalles: { prioridad: "Alta", usuario: "Pedro" } },
    { id: 8, estado: "Cerrada", asunto: "Problema con correo", descripcion: "No se envían correos", detalles: { prioridad: "Baja", usuario: "Lucía" } },
];  

//Buscar indicendias
document.getElementById("searchButton").addEventListener("click", function() {

    const id = document.getElementById("searchId").value.trim();
    const estado = document.getElementById("searchEstado").value.trim();
    const asunto = document.getElementById("searchAsunto").value.trim();
    const descripcion = document.getElementById("searchDescripcion").value.trim();

    // Array para almacenar los resultados
    const resultados = [];

    // Recorrer todas las incidencias
    for (let incidencia of incidencias) {
        let coincide = true;

        // Verificar cada criterio de búsqueda
        if (id !== "" && incidencia.id.toString() !== id) {
            coincide = false;
        }
        if (estado !== "Todas" && incidencia.estado.toLowerCase() !== estado.toLowerCase()) {
            coincide = false;
        }
        if (asunto !== "" && !incidencia.asunto.toLowerCase().includes(asunto.toLowerCase())) {
            coincide = false;
        }
        if (descripcion !== "" && !incidencia.descripcion.toLowerCase().includes(descripcion.toLowerCase())) {
            coincide = false;
        }

        // Si cumple todos los criterios, agregar al array de resultados
        if (coincide) {
            resultados.push(incidencia);
        }
    }

    // Mostrar los resultados
    mostrarResultados(resultados);
});
// Función para mostrar los resultados
function mostrarResultados(resultados) {
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = ""; // Limpiar resultados previos

    if (resultados.length === 0) {
        alert("No existen incidencias para mostrar.");
        return;
    }

    // Crear la tabla
    const tabla = document.createElement("table");
    tabla.classList.add("table", "table-bordered");

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Crear la cabecera
    thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Estado</th>
            <th>Asunto</th>
            <th>Prioridad</th>
        </tr>
    `;

    // Crear las filas
    resultados.forEach(incidencia => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${incidencia.id}</td>
            <td>${incidencia.estado}</td>
            <td>${incidencia.asunto}</td>
            <td>${incidencia.detalles.prioridad}</td>
        `;

        tbody.appendChild(fila);
    });

    // Añadir la cabecera y el cuerpo a la tabla
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    divResultado.appendChild(tabla);
}
});