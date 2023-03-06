/*
Ejercicio 1:

Apellido:Quispe
Nombre: Gabriel
Comisión: Div D
Tutor: Juan Furega

El gerente de "El super de Anto"" nos pide desarrollar un programa que  permita cargar y analizar las compras realizadas por sus clientes en una jornada de trabajo.
Para ello, se debe ingresar en cada una de las compras:

Nombre del comprador.
Edad del comprador (Debe ser mayor de edad).
Cantidad de productos comprados (No debe ser negativo ni cero).
Total gastado (No debe ser negativo ni cero).
Método de pago (Efectivo - Débito - Crédito)

En base a todas las compras registradas, informar:

A) El promedio de edad entre todos los compradores.
B) El promedio de dinero gastado por los compradores menores a 25 años.
C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
D) Nombre y cantidad de productos del comprador que menos gasto.


*/
function mostrar() {
	var nombreIngresado;
	var edadIngresada;
	var cantidadIngresada;
	var totalGastado;
	var metodoDePago;
	var respuesta;
	var promedioEdad;
	var acumuladorDineroMenos25;
	var contadorCompradores;
	var acumuladorEdades;
	var acumuladorTotalGastado;
	var cantidadMenorIngresada;
	var nombreMenosGasto;
	var cantidadMenorIngresada;
	var porcentajeDebito;
	var menosGasto;
	var acumuladorGastoDebito;

	respuesta = true;
	acumuladorDineroMenos25 = 0;
	contadorCompradores = 0;
	contadorMenor25 = 0;
	acumuladorTotalGastado = 0;
	acumuladorGastoDebito = 0;
	acumuladorEdades = 0;
	banderaMenosGastos = true;
	cantidadMenorIngresada = 0;
	cantidadIngresada = 0;


	while (respuesta == true) {
		nombreIngresado = prompt("ingrese el nombre del comprador:");

		edadIngresada = prompt("Ingrese edad del comprador");
		edadIngresada = parseInt(edadIngresada);
		while (edadIngresada < 18) {
			edadIngresada = prompt("Reingrese edad del comprador");
			edadIngresada = parseInt(edadIngresada);
		}

		cantidadIngresada = prompt("Ingrese cantidad de productos comprados: ")
		cantidadIngresada = parseInt(cantidadIngresada);
		while (cantidadIngresada < 1) {//No debe ser cero
			cantidadIngresada = prompt("Reingrese cantidad de productos comprados:");
			cantidadIngresada = parseInt(cantidadIngresada);
		}

		totalGastado = prompt("Ingrese el total gastado: ")
		totalGastado = parseInt(totalGastado);
		while (totalGastado < 1) {//No debe ser cero
			totalGastado = prompt("Reingrese el total gastado:");
			totalGastado = parseInt(totalGastado);
		}

		metodoDePago = prompt("ingrese el metodo de pago: efectivo - debito - credito");
		while (metodoDePago != "efectivo" && metodoDePago != "debito" && metodoDePago != "credito") {
			metodoDePago = prompt("Error,vuelva a ingresar el metodo de pago: efectivo - debito - credito");
		}
		//A) El promedio de edad entre todos los compradores.

		contadorCompradores++;
		acumuladorEdades += edadIngresada;
		acumuladorTotalGastado += totalGastado;

		//B) El promedio de dinero gastado por los compradores menores a 25 años.
		if (edadIngresada < 25){
			contadorMenor25++;
			acumuladorDineroMenos25 += edadIngresada;
		}

		//C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
		if (metodoDePago == "debito"){
			acumuladorGastoDebito += totalGastado;
		}

		//D) Nombre y cantidad de productos del comprador que menos gasto.
		if (totalGastado < menosGasto || banderaMenosGastos == true) {//d)
			menosGasto = totalGastado;
			nombreMenosGasto = nombreIngresado;
			cantidadMenorIngresada = cantidadIngresada;
			banderaMenosGastos = false;
		}

		respuesta = confirm("Desea ingresar otra compra?");
	}//FIN DEL WHILE

	if (contadorCompradores > 0) {//a
		promedioEdadCompradores = acumuladorEdades / contadorCompradores;
		document.write(" El promedio de edad entre todos los compradoreses: " + promedioEdad + "<br>");
	}

	if (contadorMenor25 > 0) {
		promedioEdadMenores25 = acumuladorDineroMenos25 / contadorMenor25;//b)
		document.write(" El promedio de edad entre los compradores menores a 25 son: " + promedioEdadMenores25 + "<br>");
	}
	else {
		document.write(" El promedio de edad entre los compradoreses menores a 25 no se pudo calcular" + "<br>");
	}

	if (acumuladorTotalGastado > 0) {
		porcentajeDebito = (acumuladorGastoDebito * 100) / acumuladorTotalGastado;//c)

		document.write(" El porcentaje de dinero total de compras realizadas con tarjeta debito es: " + porcentajeDebito + "<br>");
	}
	else {
		document.write(" El porcentaje de dinero total de compras realizadas con tarjeta debito es no pudo ser calculado" + "<br>");
	}

	document.write("El nombre y cantidad de productos del comprador que menos gasto es: " + nombreMenosGasto + " con una cantidad de " + cantidadMenorIngresada + "<br>");//d

}