
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
	return (num >= 50);
}

function segundaComprobacion()
{
	let confirmacion = confirm("¿Eres sincero?");
	return (confirmacion);
}

function terceraComprobacion()
{
	let str = prompt("¿Qué responderías si te pregunto si puedes entrar en mayúsculas?", "");
	return (str == "SÍ");
}
