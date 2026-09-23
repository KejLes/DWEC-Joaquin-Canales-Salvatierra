let variable;

alert(typeof(variable));

variable = prompt("Introduce un número", 1000);

alert(typeof(Number(variable)));

variable = prompt("Introduce una string", "frase");

alert(typeof(String(variable)));

variable = prompt("Introduce un número", "1312");

alert(typeof(Number(variable)));

variable = prompt("Introduce true", true);

alert(typeof(Boolean(variable)));

variable = prompt("Introduce 1", 1);

alert(typeof(Boolean(variable)));

variable = prompt("Introduce Nan", NaN);

alert(typeof(Boolean(variable)));