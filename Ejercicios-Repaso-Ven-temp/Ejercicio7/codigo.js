document.getElementById("boton").addEventListener("click", function () {
        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const asignatura = document.getElementById("asignatura");
        const calificacion = document.getElementById("notas").value;
    
        // Validar que todos los campos estén cumplimentados
        if (!nombre || !asignatura || !calificacion) {
            alert("Todos los campos deben ser completados");
            return;
        }
    
        // Abrir una ventana hija de 400x400
        const ventanaHija = window.open("", "Ventana Hija", "width=400,height=400");
    
        // Determinar el mensaje según la calificación
        let mensajeNota;
        if (calificacion < 5) {
            mensajeNota = "Necesitas mejorar";
        } else if (calificacion > 8) {
            mensajeNota = "¡Excelente trabajo!";
        } else {
            mensajeNota = "¡Sigue esforzándote!";
        }
    
        // Escribir en la ventana hija
        ventanaHija.document.write(`
            <html>
            <head>
                <title>Datos del Alumno</title>
            </head>
            <body>
                <h1>Datos del Alumno</h1>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Asignatura:</strong> ${asignatura.value}</p>
                <p><strong>Calificación:</strong> ${calificacion}</p>
                <p><strong>Mensaje:</strong> ${mensajeNota}</p>
            </body>
            </html>
        `);
    
        // Cerrar la ventana hija después de 5 segundos
        setTimeout(() => {
            ventanaHija.close();
    
            // Escribir el mensaje en la ventana padre
            const fechaActual = new Date().toLocaleString();
            document.getElementById("mensaje").textContent = `Consultados los datos del alumno ${nombre} a las ${fechaActual}`;
            document.getElementById("mensaje").style.color = "blue";
        }, 5000);
    });