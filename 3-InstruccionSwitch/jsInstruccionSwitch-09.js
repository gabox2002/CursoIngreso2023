// Gabriel Quispe DIV D grupo 3 Switch 09 
/*
Una agencia de viajes debe sacar las tarifas de los viajes, se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad para vacacionar para poder  calcular el precio final

en Invierno:
	bariloche tiene un aumento del 20% 
	cataratas y Cordoba tiene un descuento del 10%
	Mar del plata  tiene un descuento del 20%
en Verano:
	bariloche tiene un descuento del 20% 
	cataratas y Cordoba tiene un aumento del 10%
	Mar del plata  tiene un aumento del 20%
en Otoño y Primavera:
	bariloche tiene un aumento del 10% 
	cataratas tiene un aumento del 10%
	Mar del plata  tiene un aumento del 10%
	y Cordoba tiene el precio sin descuento
*/
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