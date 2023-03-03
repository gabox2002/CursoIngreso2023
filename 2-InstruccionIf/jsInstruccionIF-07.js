// Gabriel Quispe DIV D grupo 3 E/I 07
/*
l ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */
function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivilIngresado = document.getElementById("estadoCivil").value;

	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada < 18 && estadoCivilIngresado != "Soltero")
	{
		alert ("Es muy pequeño para No ser soltero.");
	}
	alert (edadIngresada + "\n" + estadoCivilIngresado);
}
//FIN DE LA FUNCIÓN   txtIdEdad estadoCivil  ("\n" es un salto en el alert)