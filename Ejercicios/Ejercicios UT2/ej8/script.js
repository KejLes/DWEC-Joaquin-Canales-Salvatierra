
const array_nums = ["zero", "One", "Two", "Three", "Four", "Five"];

function main()
{
	let num = Number(prompt("Intoduce un número entre el 1 y el 5"));
	if (isNaN(num))	// el "case NaN" no funciona porque switch es una comparación estricta (===)
		alert("No has ingresado un número");
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
		case NaN:
			alert("No has ingresado un número");
			break;
		default:
			alert("Número fuera del rango solicitado");
	}
}


main();