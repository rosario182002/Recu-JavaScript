window.addEventListener("DOMContentLoaded", () => {
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const fechaNacimiento = document.getElementById("fechaNacimiento");
    const contraseña = document.getElementById("contraseña");
    const errorMessage = document.getElementById("errorMessage");
    const sorpresa = document.getElementById("sorpresa");
    const sorpresaId = document.getElementById("sorpresaId");
    const quieroSorpresa = document.getElementById("quieroSorpresa");
    const noQuieroSorpresa = document.getElementById("noQuieroSorpresa");


    document.getElementById("enviarButton").addEventListener("click", (e) => {
        e.preventDefault();
        let errores = []; // Array para acumular los mensajes de error

        if (nombre.value === "") {
            errores.push("El campo nombre no puede estar vacío");
        }

        if (correo.value === "" || !correo.value.includes("@")) {
            errores.push("El campo correo no puede estar vacío y debe contener al menos un carácter ‘@’");
        }

        if (fechaNacimiento.value === "") {
            errores.push("El campo fecha de nacimiento no puede estar vacío");
        } else {
            const fecha = new Date(fechaNacimiento.value);
            const hoy = new Date();
            const edad = hoy.getFullYear() - fecha.getFullYear();
            if (edad < 18) {
                errores.push("Tienes que ser mayor de 18 años");
            }
        }

        if (contraseña.value === "") {
            errores.push("El campo contraseña no puede estar vacío");
        } else if (contraseña.value.length < 8) {
            errores.push("La contraseña debe ser mayor a 8 caracteres");
        }

        if (errores.length > 0) {
            errorMessage.innerHTML = errores.join("<br>"); // Muestra todos los errores
            errorMessage.className = "errorMessage";  //Asignamos el estilo
        } else {
            errorMessage.innerHTML = ""; // Limpia los errores si no hay ninguno
            errorMessage.className = "";
            sorpresa.style.display = "block";
        }
    });


    quieroSorpresa.addEventListener("click", () => {
        if(quieroSorpresa.checked){
            const ramdom = Math.floor(Math.random() * 2) +1;
            console.log("el numero es: " + ramdom);
            if (ramdom == 1) {
                sorpresaId.innerHTML = `<img src="imagenes/sorpresa1.jpg" width="650" height="350" />`
            }else{
                sorpresaId.innerHTML = `<img src="imagenes/sorpresa2.jpg" width="650" height="350" />`
            }
        }
    });
    noQuieroSorpresa.addEventListener("click", () => {
        if (noQuieroSorpresa.checked) {
            setTimeout(() => {
                sorpresaId.innerHTML = `<img src="imagenes/sorpresaNO.jpg" width="650" height="350" />`;
            }, 3000); // Muestra la imagen después de 3 segundos
        }
    });

});
