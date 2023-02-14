// Gabriel Quispe DIV D grupo 3 Switch 10
function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value; 

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja");
				break;
				default:
					alert("No se viaja");
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
				break;
				default:
					alert("No se viaja");
			}
		break;
		case "Otoño":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					alert("Se viaja");
				break;
			}
		break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("No se viaja");
				break;
				default:
					alert("Se viaja");
			}
		break;
	}
}//FIN DE LA FUNCIÓN