let usuario = prompt("Introduce tu nombre y tus apellidos");

//Eliminamos los espacios del principio y del final /Dividimos el nombre y apellido
let partes = usuario.trim().split(" ");

//Aseguramos de que tenga el nombre y dos apellidos
if(partes.length < 3){
    alert("Debes introducir tu nombre y dos apellidos");
}else{
    let nombre = partes[0];
    let apellido1 = partes[1];
    let apellido2 = partes[2];

    //Sin espacios
    let tamanoSinEspacios = usuario.split(" ").length;

    //En mayusculas y en minusculas
    let enMinusculas = usuario.toLowerCase();
    let enMayusculas = usuario.toUpperCase();

    //Nombre y apellido en 3 líneas
    let linea = `${nombre}\n${apellido1}\n${apellido2}`;

    //Cadena con  con la inicial del nombre del ptimer apellido y del segundo
    let iniciales = `${nombre[0].toLowerCase()}${apellido1.toLowerCase()}${apellido2[0].toLowerCase()}`;

    //Cadena con las tres primeras letras del nombre y de los apellidos
    let tresLetras = `${nombre.substring(0,3).toLowerCase()}${apellido1.substring(0,3).toLowerCase()}${apellido2.substring(0,3).toLowerCase()}`;

      // Mostrar los resultados
      document.write(`<h1>Resultados:</h1>`);
      document.write(`<p>Tamaño sin espacios: ${tamanoSinEspacios}</p>`);
      document.write(`<p>En minúsculas: ${enMinusculas}</p>`);
      document.write(`<p>En mayúsculas: ${enMayusculas}</p>`);
      document.write(`<p>En tres líneas:<br>${linea.replace(/\n/g, "<br>")}</p>`);
      document.write(`<p>Iniciales: ${iniciales}</p>`);
      document.write(`<p>Tres primeras letras: ${tresLetras}</p>`);
  
      // Mostrar también en la consola
      console.log(`Tamaño sin espacios: ${tamanoSinEspacios}`);
      console.log(`En minúsculas: ${enMinusculas}`);
      console.log(`En mayúsculas: ${enMayusculas}`);
      console.log(`En tres líneas:\n${linea}`);
      console.log(`Iniciales: ${iniciales}`);
      console.log(`Tres primeras letras: ${tresLetras}`);

}