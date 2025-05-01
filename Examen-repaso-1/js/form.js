const receta = {
    nombre: "Tarta de Manzana",
    ingredientes: ["manzana", "hojaldre", "huevos", "sal", "mermelada de melocotón"],
    pasos: ["pelar", "trocear", "batir"],
  };
  
  var divLista;
  window.addEventListener("DOMContentLoaded", () => {
    divLista = document.getElementById("resultadoDiv");
    document
      .getElementById("ingredientes")
      .addEventListener("click", mostrarIngredientes);
    document.getElementById("pasos").addEventListener("click", pasos);
    document.getElementById("horno").addEventListener("click", hornear);
  
    function mostrarIngredientes() {
      divLista.innerHTML = "<h3>Ingredientes:</h3><br>";
      const lista = document.createElement("ul");
      divLista.appendChild(lista);
      receta.ingredientes.forEach((i) => {
        const li = document.createElement("li");
        li.textContent = i;
        lista.appendChild(li);
      });
    }
  
    function pasos() {
      divLista.innerHTML = "<h3>Pasos:</h3><br>";
      const tabla = document.createElement("table");
      tabla.setAttribute(
        "style",
        "border-collapse:collapse;border:3px solid green;"
      );
      divLista.appendChild(tabla);
      receta.pasos.forEach((i) => {
        const tr = document.createElement("tr");
        tabla.appendChild(tr);
        tdPasos = document.createElement("td");
        tdPasos.setAttribute(
          "style",
          "border-collapse:collapse;border:3px solid green;"
        );
        tdPasos.textContent = i;
        tr.appendChild(tdPasos);
        tdCheck = document.createElement("td");
        check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        tdCheck.appendChild(check);
        tdCheck.setAttribute(
          "style",
          "border-collapse:collapse;border:3px solid green;"
        );
        tr.appendChild(tdCheck);
  
        checkboxes = Array.from(document.getElementsByTagName("input"));
        checkboxes.forEach((e, i) => {
          e.disabled = i !== 0;
        });
        checkboxes.forEach((e, i) => {
          e.addEventListener("change", () => {
            if (e.checked) {
              e.disabled = true;
              if (i + 1 < checkboxes.length) {
                checkboxes[i + 1].disabled = false;
              } else {
                alert("Enhorabuena, solo falta el tiempo del horno");
              }
            }
          });
        });
      });
    }
    function hornear() {
        let tiempo = 10;
      
        const intervalo = setInterval(() => {
          divLista.textContent = `Tiempo restante: ${tiempo} segundos`;
          if (tiempo === 0) {
            clearInterval(intervalo);
            alert("Receta terminada");
          }
          tiempo--;
        }, 1000);
      }
      
    });
    