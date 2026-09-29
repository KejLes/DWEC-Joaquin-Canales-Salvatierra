// Lo único que no hay un momento para ver el desarrollo antes del siguiente confirm
// No se imprime nada hasta que no terminen los confirm()

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function main()
{
	const multiplo = 3;
	let result

	alert("El múltiplo a considerar es " + multiplo);
	for(let i = 1; i <= 10; i++)
	{
		if(!confirm("¿Quieres ver la siguiente tabla de multiplicar?"))
			break;
		document.write("<br>-----Tabla del " + i + "-----<br>");
		for(let j = 1; j <= 10; j++)
		{
			result = i * j;
			if (result % multiplo == 0)
				break ;
			document.write(i + " * " + j + " = " + result + "<br>");
		}
	}
}

main();