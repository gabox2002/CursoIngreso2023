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
function mostrar()
{
var nombreIngresado;
var edadIngresada;
var cantidadIngresada;
var totalGastado;
var metodoDePago;
var respuesta;
var promedioEdad;
var sumaTotalGastoMenor25;
var contadorCompraMenores25;
var sumaEdades;
var sumaTotalGastado;
var cantidadMenorIngresada;
var nombreMenosGasto;
var cantidadMenorIngresada;
var porcentajeDebito;
var menosGasto;


respuesta = true;
sumaTotalGastoMenor25 =0;
contadorCompraMenores25 =0;
sumaTotalGastado=0;
sumaEdades=0;
banderaMenosGastos = true;
cantidadMenorIngresada=0;
cantidadIngresada=0;


while(respuesta == true){
	nombreIngresado = prompt("ingrese el nombre del comprador:");

	edadIngresada = prompt("Ingrese edad del comprador");
    edadIngresada = parseInt(edadIngresada);
	while(edadIngresada<18){
		edadIngresada = prompt("Reingrese edad del comprador");
    	edadIngresada = parseInt(edadIngresada);
	}
	
	cantidadIngresada = prompt("Ingrese cantidad de productos comprados: ")
	cantidadIngresada = parseInt(cantidadIngresada);
	while(cantidadIngresada>0){
		cantidadIngresada = prompt("Reingrese cantidad de productos comprados:");
    	cantidadIngresada = parseInt(cantidadIngresada);
	}

	totalGastado = prompt("Ingrese el total gastado: ")
	totalGastado = parseInt(totalGastado);
	while(totalGastado>0){
		totalGastado = prompt("Reingrese el total gastado:");
    	totalGastado = parseInt(totalGastado);
	}
	metodoDePago = prompt("ingrese el metodo de pago: Efectivo - Débito - Crédito");
     while(metodoDePago !="Efectivo" && metodoDePago !="Debito" && metodoDePago !="Credito"){
     	metodoDePago =prompt("Error,vuelva a ingresar el metodo de pago");	
	}
	if(cantidadIngresada > 0 && totalGastado > 0){
		contadorCompras++;
		sumaEdades += edadIngresada;
		sumaTotalGastado += totalGastado;
	}

	//B) El promedio de dinero gastado por los compradores menores a 25 años.
	if( edad < 25 ){
		contadorCompraMenores25++;
		sumaTotalGastoMenor25 += edadIngresada;
	}

	//C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
	if(metodoDePago == "Debito" ){
	porcentajeDebito += totalGastado;
	}

	//D) Nombre y cantidad de productos del comprador que menos gasto.
	if(totalGastado < menosGasto || banderaMenosGastos == true){
	menosGasto = totalGastado;
	nombreMenosGasto = nombreIngresado;
	cantidadMenorIngresada = cantidadIngresada;
	banderaMenosGastos = false;
	}

	respuesta = confirm("Desea ingresar otra compra?");
	}//FIN DEL WHILE

	if(contadorCompraMenores25>0){
	promedioEdad = sumaTotalGastoMenor25 /contadorCompraMenores25;//A) El promedio de edad entre todos los compradores.
	document.write(" El promedio de edad entre todos los compradoreses: " + promedioEdad + "<br>");
	}
	else{
	document.write(" El promedio de edad entre todos los compradoreses no se pudo calcular" + "<br>");
	}
	
	
	if(porcentajeDebito>0){
	porcentajeDebito = (porcentajeDebito*100)/sumaTotalGastado;

	document.write(" El porcentaje de dinero total de comras realizadas con tarjeta debito es: " + porcentajeDebito + "<br>");
	}
	else{
	document.write(" El porcentaje de dinero total de comras realizadas con tarjeta debito es no pudo ser calculado" + "<br>");
	}
	
	document.write(" El promedio de dinero gastado por menores a 25 es: " + sumaEdades + "<br>");
	
	document.write(" Nombre y cantidad de productos del comprador que menos gasto es: " + nombreMenosGasto + " con una cantidad de "+cantidadMenorIngresada + "<br>");

}