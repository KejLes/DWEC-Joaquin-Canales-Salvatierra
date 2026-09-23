
if (primeraComprobacion() && segundaComprobacion() && terceraComprobacion())
{
	alert("Puedes pasar");
	document.write("Puedes pasar");
}
else
{
	alert("No puedes pasar");
	document.write("No puedes pasar");
}


function primeraComprobacion()
{
	let num = Number(prompt("¿Cuánto llevas contigo?", ""));
	if (num < 50)
		return (false);
	else
		return (true);
}

function segundaComprobacion()
{
	let confirmacion = confirm("¿Eres sincero?");
	if (!confirmacion)
		return (false);
	else
		return (true);
}

function terceraComprobacion()
{
	let str = prompt("¿Qué responderías si te pregunto si puedes entrar en mayúsculas?", "");
	if (str != "SÍ")
		return (false);
	else
		return (true);
}
