let mensaje = setInterval(()=>{
    console.log("En un lugar de la mancha ");
},2000);

function parar(){
    clearInterval(mensaje);
    console.log("Parando el mensaje...");
}

function mensaje3Segundos(){
    setTimeout(()=>{
        console.log("Han pasado 3 segundos");
        parar();
    }, 3000);
}

function abrirReloj(){
    let nuevaVentana = window.open("", "reloh", "width=300,height=300");
    nuevaVentana.document.write(`
        <html>
        <head>
            <title>Reloj</title>
        </head>
         <body>
            <p id="reloj" style="font-size: 24px; text-align: center;"></p>
        </body>
        </html>
        `);

        function actualizarReloj(){
            let ahora = new Date();
            let hora = ahora.getHours().toString().padStart(2, "0");
            let minutos = ahora.getMinutes().toString().padStart(2, "0");
            let segundos = ahora.getSeconds().toString().padStart(2, "0");
            nuevaVentana.document.getElementById("reloj").innerText = `${hora}:${minutos}:${segundos}`;
        }
        
        let relojIntervalo = setInterval(actualizarReloj, 1000);
        
        setTimeout(()=>{
            clearInterval(relojIntervalo);
           console.log("Parando el reloj...");
        },5000);
        
        setTimeout(() => {
            nuevaVentana.close();
            console.log("Ventana cerrada.");
        }, 10000);
        


}   

