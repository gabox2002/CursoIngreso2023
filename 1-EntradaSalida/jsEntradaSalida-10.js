/* Gabriel Quispe DIV D grupo 3 E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var porcentajeDeDescuento;
	var sueldoConDescuento;

	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseFloat(sueldo);

	porcentajeDeDescuento = sueldo * 0.25;
	
	sueldoConDescuento = sueldo - porcentajeDeDescuento;

	document.getElementById("txtIdResultado").value = sueldoConDescuento;
	

} 
