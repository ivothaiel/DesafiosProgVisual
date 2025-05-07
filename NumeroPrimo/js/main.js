import { esPrimo } from "./evaluacion_primo.js";

/**
 * 1. LE ASIGNO IDS A LOS ELEMENTOS HTML
 * 2. CREO UNA FUNCIÓN QUE SE EJECUTE AL HACER CLICK EN EL BOTÓN OSEA, QUE
 * EXTRAIGO ESOS IDS Y ACA LOS MANIPULO
 */
const txtNumero = document.getElementById("txtNumero"); 
const btnValidarNumero = document.getElementById("btnValidarPrimo");
const parrafoResultado = document.getElementById("resultado");

btnValidarNumero.addEventListener("click", () => {
    const numeroIngresado = parseInt(txtNumero.value);
    const resultado = esPrimo(numeroIngresado)
    if (isNaN(numeroIngresado)) {
        parrafoResultado.textContent = "Por favor, ingrese un número válido.";
        return;
    }
    
   /**
    * aca abajo, estoy manipulando el DOM 
    * y le estoy asignando el resultado de la validacion con 
    * el operador ternario.
    * El operador ternario es una forma de escribir un if-else en una sola línea.
    * La sintaxis es la siguiente:
    * condicion ? valorSiVerdadero : valorSiFalso
    * En este caso, si resultado es verdadero, se asigna el mensaje de que el número es primo,
    */
    parrafoResultado.textContent = resultado ? `El número ${numeroIngresado} es primo` : `El número ${numeroIngresado} no es primo`;
});