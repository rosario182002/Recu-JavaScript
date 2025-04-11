let ventana;

window.onload = function(){
    setTimeout (() =>  {
        ventana = window.open("segunda.html", "ventana", "width=400, height=300");
    }, 5000);

    window.addEventListener("mensaje", function (event){
        if(event.data && event.data.texto){
            document.getElementById("mensaje").innerHTML = event.data.texto;
        }
    });
}