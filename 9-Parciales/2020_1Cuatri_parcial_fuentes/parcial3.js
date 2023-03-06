/*
Ejercicio 3:

"Atención AFIP: ""Inspección de Bultos"": La administración federal de ingresos públicos tiene el ojo puesto sobre una empresa de logística que opera en Argentina e importa productos desde  México, Colombia y Uruguay. Nos piden que realicemos un programa que permita controlar los movimientos de dicha empresa: 
De cada pedido que recibe la empresa se conoce: 
la cantidad de bultos, 
el peso por bulto (no debe superar los 1500 kilos), 
el lugar de origen.
Se establece que la tarifa regular por bulto es de $300 y 
la tarifa especial (para pedidos de más de 300 kilos por bulto) es de $500.

La aplicación debe informar a la AFIP:
A) Total facturado
B) Porcentaje de bultos ingresados desde Colombia.
C) Sobre el total facturado de bultos provenientes de México, la empresa deberá pagar un canon del 15% sobre este total (este impuesto luego será redistribuido para la construcción de hospitales). Mostrar dicho valor.
D) Para incentivar el libre comercio con los países del MERCOSUR, si el total facturado de bultos provenientes de Uruguay, supera los $15000000, se le otorgará a la empresa una devolución del 5% sobre ese total.

*/
function mostrar()
{
	let cantidadBultos;
	let origen;
	let pesoBultos;
	let TARIFA_REGULAR;
	let TARIFA_ESPECIAL;
	let IMPUESTO;
	let DESCUENTO;
	let impuestoMexico; //El monto del impuesto
	let descuentoUruguay;
	let acumuladorTotal;
	let precioTotalDeLaOperacion;
	let acumuladorBultos;
	let acumuladorBultosColombia;
	let porcentajeDeBultosColombia;
	let acumuladorFacturadoMexico;
	let acumuladorFacturadoUruguay;
	let respuesta;

	acumuladorTotal = 0;
	acumuladorBultos = 0;
	acumuladorBultosColombia = 0;
	acumuladorFacturadoMexico = 0;
	acumuladorFacturadoUruguay = 0;
	respuesta = true;

	TARIFA_REGULAR = 300;
	TARIFA_ESPECIAL = 500;
	IMPUESTO = 0.15; // 15% impuesto
	DESCUENTO = 0.05;

	while(respuesta)
	{
		origen = prompt("Ingrese el origen");
		while(origen != "México" && origen != "Colombia" && origen != "Uruguay"){
			origen = prompt("ERROR/Reingrese el origen: (México, Colombia, Uruguay)");
		}

		cantidadBultos = prompt("Ingrese la cantidad de bultos");
		cantidadBultos = parseInt(cantidadBultos);
		while(cantidadBultos < 1){//Peso no puede ser CEro
			cantidadBultos = prompt("EEROR/Reingrese la cantidad de bultos (No ingresar numeros negativos)");
			cantidadBultos = parseInt(cantidadBultos);
		}

		pesoBultos = prompt("Ingrese el peso de los bultos (Hasta 1500 Kg)");
		pesoBultos = parseFloat(pesoBultos);
		while(pesoBultos > 1500 || pesoBultos < 0){
			pesoBultos = prompt("ERROR/Reingrese el peso de los bultos (Hasta 1500 Kg, No ingresar numeros negativos)");
			pesoBultos = parseFloat(pesoBultos);
		}

		if(pesoBultos > 300){
			precioTotalDeLaOperacion = TARIFA_ESPECIAL * cantidadBultos;
		}
		else{
			precioTotalDeLaOperacion = TARIFA_REGULAR * cantidadBultos;
		}

		acumuladorTotal += precioTotalDeLaOperacion;
		
		switch(origen){
			case "Colombia":
				acumuladorBultosColombia += cantidadBultos;
				break;
			case "México":
				acumuladorFacturadoMexico += precioTotalDeLaOperacion;
				break;
			case "Uruguay":
				acumuladorFacturadoUruguay += precioTotalDeLaOperacion;
				break;
		}

		acumuladorBultos += cantidadBultos;

		respuesta = confirm("¿Desea ingresar otro dato?");
		
	}

	porcentajeDeBultosColombia = (acumuladorBultosColombia * 100) / acumuladorBultos;
	
	impuestoMexico = acumuladorFacturadoMexico * IMPUESTO;
	
	if(acumuladorFacturadoUruguay > 15000000)
	{
		descuentoUruguay = acumuladorFacturadoUruguay * DESCUENTO;
		acumuladorTotal = acumuladorTotal - descuentoUruguay;
	}

	document.write("A El total facturado es $" + acumuladorTotal + "<br>");
	document.write("B El porcentaje de bultos de Colombia es: " + porcentajeDeBultosColombia + "%" + "<br>");
	document.write("C El impuesto de Mexico es de $: " + impuestoMexico + "<br>");
	document.write("D El descuento de Uruguay es de $: " + descuentoUruguay);

}
