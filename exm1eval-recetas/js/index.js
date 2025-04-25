window.addEventListener("DOMContentLoaded", () => {
  const inputUsuario = document.getElementById("usuario");
  const provincia = document.getElementById("provincia");
  const opciones = provincia.options;
  const cpostal = document.getElementById("cpostal");
  const clave = document.getElementById("clave");
  const claveInput = document.getElementById("clave").value;
  const divError = document.getElementById("mensajeError");

  document.getElementById("b1").addEventListener("click", (e) => {
    e.preventDefault();

    if (inputUsuario.value == "") {
      divError.innerHTML = "El usuario no debe estar vacio<br>";
    } else {
      divError.innerHTML = "";
    }

    if (clave.value == "") {
      divError.innerHTML += "El campo clave no debe estar vacio<br>";
    } else {
      divError.innerHTML = "";
    }

    if (cpostal.value == "") {
      divError.innerHTML += "El campo código postal no debe estar vacio<br>";
    } else {
      divError.innerHTML = "";
    }

    if (provincia.value == 0) {
      divError.innerHTML += "Debes seleccionar alguna provincia<br>";
    } else {
      divError.innerHTML = "";
    }

    const ultimo = claveInput.substring(claveInput.length - 1);
    if (claveInput.length < 8 || isNaN(Number(ultimo))) {
      divError.innerHTML += "La clave deber mayor de 8 y terminar en letra<br>";
    } else {
      divError.innerHTML = "";
    }

    if (isNaN(Number(cpostal.value)) || cpostal.value.length < 5) {
      divError.innerHTML +=
        "El codigo postal debe ser mayor de 5 y ser numérico<br>";
    } else {
      divError.innerHTML = "";
    }

    const dosPrimeros = cpostal.value.substring(0, 2);
    if (provincia.value != dosPrimeros) {
      divError.innerHTML +=
        "El codigo postal debe coincidir con alguna provincia<br>";
    } else {
      divError.innerHTML = "";
    }

    if (divError.innerHTML == "") {
      window.location.href = "formulario.html";
    }
  });
});
