let ventana ;

function abrirVentana(){
    if(!ventana || ventana.closed){
        ventana = window.open("segunda.html", "SegundaVentana", "width=300,height=400,left=400,top=400");
    }else{
        ventana.focus();
    }
}

function moverVentana(){
    if(ventana && !ventana.closed){
        ventana.moveBy(200, 100); //Mueve la ventana a la posición especificada
        ventana.focus(); // Coloca el foco en la ventana actual.
    }
}

function moverPosicionVentana() {
    if (ventana && !ventana.closed) {
        ventana.moveTo(500, 200); //Mueve la ventana a la posición especificada
        ventana.focus(); // Coloca el foco en la ventana actual
    }
}

function aumentaVentana() {
    if (ventana && !ventana.closed) {
        ventana.resizeBy(100, 200);
        ventana.focus();
    }
}

function cambiaVentana() {
    if (ventana && !ventana.closed) {
        ventana.resizeTo(100, 150);
        ventana.focus();
    }
}

function fondoVentanaVerde(){
   ventana = document.body.style.backgroundColor = 'green';
}

function fondoVentanaRojo(){
    window.opener.document.body.style.backgroundColor ='red';
}

function cerrarVentana(){
   ventana = window.close();
}

function cerrarAmbasVentanas() {
    if (window.opener) {
        window.opener.close();
    }
    window.close();
}