document.addEventListener("DOMContentLoaded", function(){

    const fechaDiv = document.getElementById("fecha");
    const hoy = new Date();
    const fechaFormato = `${hoy.getDate().toString().padStart("2",0)}/${(hoy.getMonth()+1).toString().padStart(2,"0")}/${hoy.getFullYear()}`;

        fechaDiv.textContent = `Fecha de hoy: ${fechaFormato}`;
      
        // Deshabilitar el botón con id="comprar"
        const botonComprar = document.getElementById("comprar");
        botonComprar.disabled = true;
    

        //lista de titulos
        const titulos = [
             "El Señor de los Anillos","Harry Potter", "El Hobbit", "Cien años de soledad","Don Quijote de la Mancha"
        ];

        //FUNCION DEL BOTON OFERTAS
        function ofertas (){
            //para deshabilitar el boton
            botonComprar.disabled = true;
            
            //Mostramos el mensaje de esperar
            const librosDiv = document.getElementById("libros");
            librosDiv.innerHTML ="<b>Esperando...</b>";

            //Esperamos los 5 segundos para mostrar la oferta
            setTimeout(() =>{

                //hacemos el numero aleatorio entre 0 y 4 
                const indiceAleatorio = Math.floor(Math.random() * titulos.length);

                //Obtener el titulo del libro 
                const libroSeleccionado = titulos[indiceAleatorio];

                //Mostrar el mensaje de oferta
               if(indiceAleatorio ===0){
                librosDiv.innerHTML = `<h2>Ofertón del día: ${libroSeleccionado}</h2>`;
               }else{
                librosDiv.innerHTML =`<h2> Oferta del día: ${libroSeleccionado}</h2>`;
               }

            }, 5000);

        }
        //asignamos la funcion al boton
        const botonOfertas = document.getElementById("ofertas");
        botonOfertas.addEventListener("click", ofertas);


        //funcion para cargar libros 
        function cargarLibros() {
            const librosDiv = document.getElementById("libros");

            //Crear la tabla 
            let tablaHTML = "<table border='1'>";

            //Agregamos las filas con los titulos
            titulos.forEach((titulo, index)=>{
                tablaHTML += `
                <tr>
                    <td>${index +1}. ${titulo}</td>
                    <td><input type="text" value="0" class="cuadro"></td>
                </tr>
                `;
            });
        // Cerrar la tabla
        tablaHTML += "</table>";
        // Insertar la tabla en el div
        librosDiv.innerHTML = tablaHTML;

        // Habilitar el botón con id="comprar"
        const botonComprar = document.getElementById("comprar");
        botonComprar.disabled = false;
        }

        // Asignar la función al botón con id="cargarLibros"
        const botonCargarLibros = document.getElementById("cargar");
        botonCargarLibros.addEventListener("click", cargarLibros);




        //Funcion de comprar Libros 

        function comprarLibro (){

            //obtenemos TODOS los inputs de la tabla
            const inputs = document.getElementsByClassName("cuadro");
            let hayLibros = false;
            
            //verificamos si hay al menos un libro con cantidad mayor a 0
            inputs.forEach(input => {
                if (parseInt(input.value) > 0) {
                    hayLibros = true;
                }
            });

            if(!hayLibros){
                // Mostrar alerta si no hay libros seleccionados
                alert("No hay ningún libro que comprar");
                return;
            }
            //Abrimos la nueva ventana que es resumen.html
            window.open("resumen.html", "Resumen", "witdh=500,height=300");
        }
        // Asignar la función al botón con id="comprar"
        botonComprar.addEventListener("click", comprarLibro);
                

});


