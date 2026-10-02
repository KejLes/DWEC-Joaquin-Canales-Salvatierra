


let is_empty_str = (str) => str === "";

function greet(name, genre)
{
	if(is_empty_str(genre))
		alert("Bienvenid@, " + name);
	else if (genre === "masculino")
		alert("Bienvenido " + name);
	else if (genre === "femenino")
		alert("Bienvenida " +  name);
	else
		alert("Hola, " + name);
}

function main()
{
	// let name = prompt("Introduce tu nombre:");
	// if (is_empty_str(name))
	// 	alert("ERROR");
	let name;
	do
	{
		name = prompt("Introduce tu nombre:");
		if (is_empty_str(name))
			alert("ERROR\nIntroduce un nombre.");
	} while (is_empty_str(name))
	let genre = prompt("Indtroduce tu género:");
	greet(name, genre);
}

main();