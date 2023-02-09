// Gabriel Quispe DIV D grupo 3 E/I 08
function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivilIngresado = document.getElementById("estadoCivil").value;

	edadIngresada = parseInt(edadIngresada);

if(edadIngresada < 18 && estadoCivilIngresado != "Soltero")
	{
	}
	else
	{
		alert("Es soltero y no es menor.");
	}
}//FIN DE LA FUNCIÓN