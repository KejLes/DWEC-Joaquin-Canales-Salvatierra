
function main()
{
	let num = Number(prompt("Intoduce un número entre el 1 y el 5"));
	if (isNaN(num))	// el "case NaN" no funciona porque switch es una comparación estricta (===)
	{
		alert("No has ingresado un número");
		return ;
	}

	/**
	 * Tengo el caso de si es NaN, pero como es comparación de igualdad
	 * estricta no funciona y por eso la condición previa.
	 * 
	 * Para cada caso si el valor de la variable num coincide con el
	 * valor de cada case, se ejecuta el código y se usar break para
	 * que no se ejecuten los demás casos siguientes. El caso por
	 * defecto es si ningún caso coincide, eso significa que no está
	 * en el rango del 1 al 5.
	 */
	switch (num)
	{
		case 1:
			alert("One");
			break;
		case 2:
			alert("Two");
			break;
		case 3:
			alert("Three");
			break;
		case 4:
			alert("Four");
			break;
		case 5:
			alert("Five");
			break;
		case 6:
		case 7:
			alert("¡Six Seven!");
			break;
		case NaN:
			alert("No has ingresado un número");
			break;
		default:
			alert("Número fuera del rango solicitado");
	}
}

main();