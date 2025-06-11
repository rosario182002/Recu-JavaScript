function generarResumen(){
    const inputs = Array.from(window.opener.document.getElementsByClassName('cuadro')); // el opener abre los datos de la ventana PADRE
    const titulos = Array.from(window.opener.document.getElementsByClassName('titulo'));

    const resumen = document.getElementById('resumenPelis');

    let listaHTML = '<ul>';

    inputs.forEach((input, index) => {
        const cantidad = parseInt(input.value);

        if(cantidad > 0){
            const titulo = titulos[index].textContent;
            listaHTML += `<li>${titulo}: ${cantidad}</li>`;
        }
    });
    listaHTML += '</ul>';
    resumen.innerHTML = listaHTML;
}

function explorarLibros(){
    const pelis = window.opener.document.getElementById('resumen');
    pelis.innerHTML = '<h2> Vuelve pronto a nuestra página de pelis en línea </h2>';
    window.close();
}

window.onload =() => {
 generarResumen();

 const volver = document.getElementById('volver');
    volver.addEventListener('click', explorarLibros);

};