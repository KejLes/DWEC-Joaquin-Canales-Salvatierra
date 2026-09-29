
function pedir_nota()
{
	let nota = Number(prompt("Introduce la nota"));
	let msg = nota == 0 ? "NO PRESENTADO" :
	 nota < 5 ? "SUSPENSO" :
	  nota < 6 ? "APROBADO" :
	   nota < 7 ? "BIEN" :
	    nota < 9 ? "NOTABLE" :
		 nota <= 10 ? "SOBRESALIENTE" : 
		 "ERROR";
	alert(nota);
}

pedir_nota();