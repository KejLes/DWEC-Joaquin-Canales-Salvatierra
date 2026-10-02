
function main()
{
	const nombreInvitado = "Invitado";
	let nombrePrompt = prompt("Introduce tu nombre");

	usuario = nombrePrompt ?? nombreInvitado ?? "Ánonimo";
	usuario = nombrePrompt || nombreInvitado || "Ánonimo";
	alert("Has entrado ", usuario);
}

main();