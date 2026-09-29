// Crea una variable vacía. Crea una variable inicial de tipo BigInt. Muestra un alert con la función typeof de la variable inicial vacía con BigInt. Ahora pide un número por el prompt y guárdalo en esta misma variable. Hazla pasar por los siguientes tipos en este orden y muestra un alert con typeof y el valor de la variable en cada ocasión:

// String. Es el tipo inicial y no hay que hacer conversiones.
// Number. Si el número es correcto se cambiará el tipo y si no aparecerá un NaN.
// Boolean. Prueba con el constructor de boolean para comprobar que los valores mayores que 0 son true o ver qué ocurre con NaN.

let var1 = 0n;
alert(typeof(var1));
var1 = Number(prompt("Introduce un número", "10"));
alert(typeof(var1));
var1 = prompt("Introduce un string", "string");
alert(typeof(var1));
var1 = Number(prompt("Introduce un número correcto", "10"));
alert(typeof(var1));
var1 = Number(prompt("Introduce un número incorrecto", "Diez"));
alert(`El tipo es: ${typeof(var1)} mientras que el valor es: ${var1}`);
var1 = Boolean(prompt("Introduce un booleano válido", true));
alert(`El tipo es: ${typeof(var1)} mientras que el valor es: ${var1}`);
var1 = Boolean(prompt("Introduce un número que será booleano", "10"));
alert(`El tipo es: ${typeof(var1)} mientras que el valor es: ${var1}`);
var1 = Number(prompt("Introduce un NaN que será booleano", "NaN"));
alert(`El tipo es: ${typeof(var1)} mientras que el valor es: ${var1}`);
