
function pedir_nota()
{
	let nota = Number(prompt("Introduce la nota"));
	let msg = nota === 0 ? "NO PRESENTADO" :
	 nota < 5 && nota > 0 ? "SUSPENSO" :
	  nota < 6 && nota > 0 ? "APROBADO" :
	   nota < 7 && nota > 0 ? "BIEN" :
	    nota < 9 && nota > 0 ? "NOTABLE" :
		 nota <= 10 && nota > 0 ? "SOBRESALIENTE" : 
		 isNaN(nota) ? "ERROR. Introduciste algo que no es un número" :
		 "ERROR. Nota fuera de los límites";
	alert(msg);
}

pedir_nota();