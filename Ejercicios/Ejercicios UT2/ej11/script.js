// Lo único que no hay un momento para ver el desarrollo antes del siguiente confirm
// No se imprime nada hasta que no terminen los confirm()



/**
 * Un bucle for con la variable (i) que empiza en uno y cumple la condición de ser 
 * <= 10, en cada iteración se suma 1 a esa variable (i). Al empezar cada bucle se
 * comprueba si el usuario quiere que se muestre la tabla de multiplicar, en caso
 * negativo se corta la ejecución del bucle, en caso positivo se sigue con la 
 * iteración, entonces se imprime la cabecera de la tabla y se usa otro bucle for
 * con variable (j) que se va sumando uno con cada iteración y cumple la condición
 * de ser <= 10. Se usa la variable result para guardar el resultado y en la 
 * condicional se comprueba que el resultado sea par, se hace sabiendo que si a 
 * resultado lo divides entre dos el resto es 0, en mi condición he puesto que si el
 * resto es distinto de 0 se pasa a la siguiente iteración sin llegar a imprimir el resultado.
 * Si es impar se imprime la operación y el resultado.
 */
function main()
{
	let result

	for(let i = 1; i <= 10; i++)
	{
		if(!confirm("¿Quieres ver la siguiente tabla de multiplicar?"))
			break;
		document.write("<br>-----Tabla del " + i + "-----<br>");
		for(let j = 1; j <= 10; j++)
		{
			result = i * j;
			if (result % 2 != 0)
				continue ;
			document.write(i + " * " + j + " = " + result + "<br>");
		}
	}
}

main();