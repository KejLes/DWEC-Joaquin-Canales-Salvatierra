// Crea un script que pida el radio de un círculo y calcule y muestre el área del mismo en una página HTML.
//  Definir PI como una constante. Muestra el resultado con "document.write". Ahora aumenta el radio un 25% 
//  y calcula de nuevo el área. Emplea al menos un operador de decremento y muestra el nuevo resultado con 
//  "document.write".

 const PI = 3.1416;

let radio = Number(prompt("Introduce el radio", 10));
let area = radio * radio * PI;
document.write(`El radio es ${radio}<br>El área del círculo es ${area} metros cuadrados<br>`);
radio = radio * 1.25;
area = radio * radio * PI;
document.write(`Un incrementto del radio del 25% --> radio * 1.25 = ${radio}<br>El área del círculo con el incremento del 25% es ${area} metors cuadrados<br>`);
area--;
document.write(`Al área le resto 1 con la linea: "area--;", entonces el resultado es: ${area}`);