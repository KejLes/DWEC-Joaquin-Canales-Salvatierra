
"use strict";

/**
 * Expresión de función.
 * Sirve para comprobar si la cadena está en blanco.
 * Retorna true si está vacío, o false si contiene algo.
 */
let is_empty_str = function (str) {
	return (str === "")
};

/**
 * Función flecha.
 * Recibe el género y según si está vacío o si es "masculino" o "femenino"
 * devuelve una string. Añadí una opción en la que si no es ninguna de 
 * las opciones anteriores que devuelva "Hola".
 */
let greet_introduction_according_genre = (genre) => {
	if (is_empty_str(genre))
		return ("Bienvenid@");
	else if (genre === "masculino")
		return ("Bienvenido");
	else if (genre === "femenino")
		return ("Bienvenida");
	else
		return ("Hola");

};

/**
 * Función normal.
 * Recibe `name` y `genre`. Llama a greet_introduction_according_genre() con `genre`
 * como parámetro y la string que devuelve, junto a ", " y `name` lo muestra con un
 * alert().
 */
function greet(name, genre) {
	alert(greet_introduction_according_genre(genre) + ", " + name);
}

function main() {
	let name = prompt("Introduce tu nombre:");
	/* Si se recibe una string vacía se muestra un mensaje de error y se termina
	   la ejecución del script, entonces no llega a la función greet() para saludar
	   con alert*/
	if (is_empty_str(name)) {
		alert("ERROR\nDebes introducir tu nombre.");
		return;
	}
	let genre = prompt("Indtroduce tu género:");
	greet(name, genre);
}

main();