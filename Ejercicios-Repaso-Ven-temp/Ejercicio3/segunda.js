window.onload = function () {
    const input = document.getElementById("textoInput");
    const boton = document.getElementById("enviarBtn");
  
    boton.addEventListener("click", () => {
      const texto = input.value.trim();
  
      if (texto === "") {
        alert("Por favor, escribe algo.");
      } else {
        // Enviar el texto a la ventana principal
        window.opener.postMessage({ texto: texto }, "*");
        // Cerrar esta ventana
        window.close();
      }
    });
  };
  