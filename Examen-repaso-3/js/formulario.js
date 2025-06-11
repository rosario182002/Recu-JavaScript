document.addEventListener("DOMContentLoaded", function(){

    const reserva = document.getElementById("reservaForm");
    const boton = document.getElementById("reservarBtn");
    const errorDiv = document.getElementById("errorDiv");
    const adivinarDiv = document.getElementById("adivinar");
    const adivinarId = document.getElementById("adivinarId");
    const opcion = document.getElementById("opcion"); 

    reserva.addEventListener("click", function(){
        errorDiv.textContent = "";
        errorDiv.className = ""; //Esto lo que hacce es eliminar la clase

        const nombre = document.getElementById("nombre").value.trim();
        const tipo = document.getElementById("tipo").value;
        const fecha = document.getElementById("fecha").value;
        const pago = parseFloat(document.getElementById("pago").value.trim());

        //validar los campos
        let errores = [];
        if(!nombre){
            errores.push("El nombre es obligatorio ");
        }
        if(!tipo){
            errores.push("El tipo es obligatorio");
        }
        if(!fecha){
            errores.push("La fecha es obligatoria");
        }else{
            const fechaEvento = new Date(fecha);
            const fechaActual = new Date();
            if(fechaEvento < fechaActual){
                errores.push("La fecha no puede ser anterior a la actual");
            }
        }
        if(isNaN(pago) || pago <= 20){
            errores.push("El pago es obligatorio y debe ser mayor a 20");
        }

        // Mostrar errores
        if(errores.length > 0){
            errorDiv.textContent = errores.join(", ");
            errorDiv.className = "error";
            return;
        }

        // Si no hay errores, mostrar el adivinar
        adivinarDiv.style.display = "block";
    });

        //funcion para adivinar el id
         opcion.addEventListener("change", function () {
        const seleccion = opcion.value;

        // Limpiar contenido previo
        adivinarId.innerHTML = "";

        if (seleccion === "par") {
            // Mostrar imagen "par.jpg"
            const img = document.createElement("img");
            img.src = "images/par.jpg";
            img.style.width = "800px";
            img.style.height = "500px";
            adivinarId.appendChild(img);
        } else if (seleccion === "impar") {
            // Mostrar imagen "impar.jpg"
            const img = document.createElement("img");
            img.src = "images/impar.jpg";
            img.style.width = "800px";
            img.style.height = "500px";
            adivinarId.appendChild(img);

            // Generar número aleatorio entre 3 y 6
            const numeroAleatorio = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
            console.log("Número aleatorio generado:", numeroAleatorio);

            // Mostrar "fin.jpg" después de los segundos generados
            setTimeout(() => {
                adivinarId.innerHTML = ""; // Limpiar contenido previo
                const finImg = document.createElement("img");
                finImg.src = "images/fin.jpg";
                finImg.style.width = "800px";
                finImg.style.height = "500px";
                adivinarId.appendChild(finImg);
            }, numeroAleatorio * 1000);
        }
    });
});

