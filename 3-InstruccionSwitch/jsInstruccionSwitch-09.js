// Gabriel Quispe DIV D grupo 3 Switch 09
function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value; 
	const estadiaBase = 15000;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					precioFinal = estadiaBase + (estadiaBase * 0.2);
					alert("El total a pagar es de $" + precioFinal);
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = estadiaBase - (estadiaBase * 0.1);
					alert("El total a pagar es de $" + precioFinal);
					break;
				case "Mar del plata":
					precioFinal = estadiaBase - (estadiaBase * 0.2);
					alert("El total a pagar es de $" + precioFinal);
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					precioFinal = estadiaBase - (estadiaBase * 0.2);
					alert("El total a pagar es de $" + precioFinal);
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = estadiaBase + (estadiaBase * 0.1);
					alert("El total a pagar es de $" + precioFinal);
					break;
				case "Mar del plata":
					precioFinal = estadiaBase + (estadiaBase * 0.2);
					alert("El total a pagar es de $" + precioFinal);
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioFinal = estadiaBase + (estadiaBase * 0.2);
					alert("El total a pagar es de $" + precioFinal);
					break;
				case "Cordoba":
					alert("El total a pagar es de $ " + estadiaBase);
					break;
			}
			break;
	}
}//FIN DE LA FUNCIÓN