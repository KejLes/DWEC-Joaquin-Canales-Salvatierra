
function acceso_al_usuario()
{
	alert("Has accedido correctamente");
	document.write("Has accedido correctamente");
	// Código para el usuario
}

/**
 * Lo había hecho con while, asi que lo entrego con do while
 */
function main()
{
	const PIN = 1234;
	let input;
	let num_tries = 0;

	// while (num_tries < 3)
	// {
	// 	input = Number(prompt("Introduce el pin"));
	// 	if (input == PIN)
	// 	{
	// 		acceso_al_usuario();
	// 		break;
	// 	}
	// 	else
	// 		alert("Contraseña incorrecta, inténtalo de nuevo, intentos restantes: " + (2 - num_tries));
	// 	num_tries++;
	// }
	// if (num_tries == 3)
	// 	alert("Tarjeta bloqueada");

	/**
	 * Un bucle que usa num_tries como condicionante para decidir si seguir
	 * con el siguiente bucle. Pide el pin con prompt(), comprueba que sea
	 * correcta, si no lo es le dice que lo intente de nuevo y cuántos
	 * intentos le queda, se suma uno a num_tries, si acierta el pin se
	 * va a otra función que usa alert() y document.write() para decir que
	 * accedió correctamente. Cuando se acaba el bucle porque ya no se
	 * cumple la condición, num_tries es = 3, entonces se usa alert para
	 * indicar que no pudo acceder y su tarjeta está bloqueada. Este
	 * condicional también se comprueba si el pin es correcto pero como
	 * no se cumple se omite.
	 */
	do
	{
		input = Number(prompt("Introduce el pin"));
		if (input == PIN)
		{
			acceso_al_usuario();
			break;
		}
		else if (num_tries != 2)
			alert("Contraseña incorrecta, inténtalo de nuevo, intentos restantes: " + (2 - num_tries));
		num_tries++;
	}
	while(num_tries < 3)
	if (num_tries == 3)
		alert("Tarjeta bloqueada");
}

main();