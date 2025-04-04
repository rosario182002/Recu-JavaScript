var refranes = ["El que la sigue la consigue", 
                "Más vale prevenir que curar", 
                "Quien todo lo quiere, todo lo pierde",
                "No por mucho madrugar amanece más temprano", 
                "Persona prevenida vale por dos"];

var temp = setInterval(mostrarRefran, 2000);

var contador = 0;

function mostrarRefran(){
    document.getElementById("resultado").innerHTML += refranes[contador] + "<br>";
    contador++;
    if(contador > refranes.length-1){
        contador = 0;
    }
}

var boton = document.getElementById("boton");
boton.addEventListener("click", parar);

function parar(){
    boton.style.backgroundColor="red";
    clearInterval(temp);
}