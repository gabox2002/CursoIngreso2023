/* Gabriel Quispe DIV D grupo 3 E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*var sueldo;
	var porcentajeDeDescuento;
	var sueldoConDescuento;

	sueldo = document.getElementById("txtIdImporte").value;

	sueldo = parseFloat(sueldo);

	porcentajeDeDescuento = sueldo * 0.25;
	
	sueldoConDescuento = sueldo - porcentajeDeDescuento;

	document.getElementById("txtIdResultado").value = sueldoConDescuento;
	*/


	var valor;
	var valorConIva;
	var descuentoMayorista;
	iva = "21%";


	valor = document.getElementById("txtIdImporte").value;

	valor = parseFloat(valor);


	valorConIva = valor * 1.21;

	descuentoMayorista = valor * 0.05;

	TotalPagar = valorConIva - descuentoMayorista;

	alert("Importe bruto: " + valor + " Iva: " + iva + " Importe con Iva: " + valorConIva + " Descuento: " + descuentoMayorista + " Total a pagar: " + TotalPagar);

} 
