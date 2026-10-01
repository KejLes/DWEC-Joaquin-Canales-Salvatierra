
function main()
{
	const usuario_invitado = "Invitado";
	usuario = prompt("Introduce tu usuario") ?? usuario_invitado ?? "Ánonimo";
	alert("Has entrado ", usuario);
}

main();