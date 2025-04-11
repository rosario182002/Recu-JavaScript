let intervalo;
let tiempoInicio;
let numeroSeleccionado = null;

function generarNumeroAleatorio(min, max){
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iniciar(){
const min = parseInt(document.getElementById("min").value);
const max = parseInt(document.getElementById("max").value);

if(isNaN(min) || isNaN(max) || min >= max){
    alert("Por favor, introduce valores válidos para el rango.");
    return;
}

tiempoInicio = Date.now();
intervalo = setInterval(()=>{
    var numero = generarNumeroAleatorio(min, max);
    document.getElementById('resultado').value = numero;

},100);
}

function parar(){
clearInterval(intervalo);
numeroSeleccionado = document.getElementById('resultado').value;
}

function mostrarResumen(){

    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    const tiempoFinal = Date.now();
    const segundos = ((tiempoFinal - tiempoInicio) / 1000).toFixed(2);

    const ventanaResumen = window.open('', 'Resumen', 'width=500,height=500');
    ventanaResumen.document.write(`
      <html>
      <head>
        <title>Resumen de la Lotería</title>
        <style>
          body { font-family: Arial; padding: 20px; }
          .capa { border: 1px solid #ccc; padding: 15px; }
          button { margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="capa">
          <h2>Resumen de la lotería</h2>
          <p>Valor mínimo: ${min}</p>
          <p>Valor máximo: ${max}</p>
          <p>Número lotería seleccionado: ${numeroSeleccionado ?? 'No detenido aún'}</p>
          <p>Han pasado: ${numeroSeleccionado ? segundos + ' segundos' : '—'}</p>
          <button onclick="window.close()">Cerrar</button>
        </div>
      </body>
      </html>
    `);
  }