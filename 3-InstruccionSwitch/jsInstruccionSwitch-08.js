// Gabriel Quispe DIV D grupo 3 Switch 08
// Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
function mostrar()
{
	var destinoIngresado = txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Aquí hace frío");
		break;
		case "Cataratas":
			alert("Aquí hace calor");
		break;
		case "Mar del plata":
			alert("Aquí hace calor");
		break;
		case "Ushuaia":
			alert("Aquí hace frío");
		break;
	}
}//FIN DE LA FUNCIÓN