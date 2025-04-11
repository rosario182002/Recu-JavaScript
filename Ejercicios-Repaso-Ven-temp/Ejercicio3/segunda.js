
    const input = document.getElementById("texto");
    const boton = document.getElementById("enviar");
  
    boton.addEventListener("click", () => {
      const texto = input.value.trim();
  
      if (texto === "") {
        alert("Por favor, escribe algo.");
      } else {
        // Enviar el texto a la ventana principal
        window.opener.document.getElementById("mensaje").innerHTML=texto;
        // Cerrar esta ventana
        window.close();
      }
    });

  