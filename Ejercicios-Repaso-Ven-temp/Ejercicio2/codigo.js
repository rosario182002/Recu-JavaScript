
/*
Se muestar la cuenta regresiva de las horas, minutos y segundos que faltan para realizar el dia (cuenta atras).
Debe mostrarlo con el fromato: HH:MM:SS. Las horas, minutos y segundos tiene que tener dos dígitos.
*/
// Ejecuta la función cuentaAtras cada 1000 milisegundos (es decir, cada segundo)
var temporizador = setInterval(cuentaAtras, 1000);

// Esta es la función que calcula cuánto falta para que termine el día (a medianoche)
var cuentaAtras = () => {
    // Creamos una variable con la hora actual
    var ahora = new Date();

    // Creamos una nueva fecha que representa la medianoche de mañana (00:00 del siguiente día)
    var finDia = new Date(
        ahora.getFullYear(), // Año actual
        ahora.getMonth(),    // Mes actual (de 0 a 11)
        ahora.getDate() + 1  // Día de mañana
    );

    // Calculamos cuántos milisegundos hay entre "ahora" y la medianoche
    var diferencia = finDia - ahora;

    // Calculamos cuántas horas enteras hay en esa diferencia
    const horas = Math.floor(diferencia / (1000 * 60 * 60));

    // Calculamos cuántos minutos hay después de quitar las horas
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    // Calculamos cuántos segundos hay después de quitar las horas y los minutos
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Esta función convierte un número a texto de dos dígitos
    // Si el número es menor que 10, le pone un 0 delante
    const dosDigitos = (numero) => (numero < 10 ? '0' + numero : '' + numero);

    // Mostramos el tiempo restante con formato hh:mm:ss dentro del input con id="tiempo"
    document.getElementById("tiempo").value = 
        `${dosDigitos(horas)}:${dosDigitos(minutos)}:${dosDigitos(segundos)}`;
};
