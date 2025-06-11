let ventana1;
let ventana2;

function abrirVentanas(){
    ventana1 = window.open("ventana1.html", "Ventana 1", "width=300,height=200,top=100,left=300");
    ventana2 = window.open("ventana2.html", "Ventana 2", "width=300,height=200,top=100,left=500");
}

function cerrarVentanas(){
    if(ventana1){
        ventana1.close();
    }
    if(ventana2){
        ventana2.close();
    }
}

function cambiarFondoVentana1(){
        ventana1.document.body.style.backgroundColor = "#FFECA1"
}

function cambiarFondoVentana2(){
        ventana2.document.body.style.backgroundColor = "#EFC3CA"
}

function enviarMensajeVentana1(){
    window.opener.ventana1.document.body.innerHTML += "<p>La ventana 2 te saluda</p>";
}
function cambiarFondoVentana2(){
    document.body.style.backgroundColor = "#5DE2E7";
}
