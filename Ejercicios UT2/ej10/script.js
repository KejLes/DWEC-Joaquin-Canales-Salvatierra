
function acceso_al_usuario()
{
	alert("Has accedido correctamente");
	document.write("Has accedido correctamente");
	// Código para el usuario
}

function main()
{
	const PIN = 1234;
	let input;
	let num_tries = 0;

	while (num_tries < 3)
	{
		input = Number(prompt("Introduce el pin"));
		if (input == PIN)
		{
			acceso_al_usuario();
			break;
		}
		else
			alert("Contraseña incorrecta, inténtalo de nuevo, intentos restantes: " + (2 - num_tries));
		num_tries++;
	}
	if (num_tries == 3)
		alert("Has fallado tres veces");
}

main();