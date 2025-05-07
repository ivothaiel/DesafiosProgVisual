export const esPrimo = (numero) => {
    if (numero <= 1) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(numero); i += 2) { 
        //el for sirve para recorrer los números impares desde 3 hasta la raíz cuadrada del número para ver si es primo
        //si el número es divisible entre alguno de esos números, no es primo
        // Math.sqrt(numero) es la raíz cuadrada del número
        if (numero % i === 0) return false;
    }
    return true;
}