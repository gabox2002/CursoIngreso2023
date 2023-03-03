// Gabriel Quispe DIV D grupo 3 E/I 08
/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' */
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