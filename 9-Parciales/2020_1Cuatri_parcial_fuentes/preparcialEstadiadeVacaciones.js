/*
Nos ingresan una cantidad indeterminada de estadías de  vacaciones, validando los datos ingresados:

nombre del titular,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Cordoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano? (si o no)
forma de pago ("con mercadopago", "tarjeta" o "efectivo")

Informar con document.write
a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel
c- el lugar con la mayor cantidad de días acumulados
d- la suma de todos los importes
e-el nombre del más pesado de los pasajeros y el del más liviano
f-el lugar donde se pagó el mayor importe
g-el nombre de la mujer más alta
h- Cuál fue la forma de pago más utilizada
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros
k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo

*/


function mostrar()
{
	let contadorAlta = 0;
	let contadorBaja = 0;
	let pesoAcumuladoVillaGessel = 0;
	let acumuladorDiasPuertoMadryn = 0;
	let acumuladorDiasVillaGessel = 0;
	let acumuladorDiasCordoba = 0;
	let importeTotal = 0;
	let nombreMasPesado = "";
	let nombreMasLiviano = "";
	let pesoMasPesado = 0;
	let pesoMasLiviano = Infinity;
	let lugarMasDias = "";
	let mayorImporte = 0;
	let lugarMayorImporte = "";
	let mujerMasAlta = "";
	let alturaMujerMasAlta = 0;
	let formaPagoMasUtilizada = "";
	let contadorMercadoPago = 0;
	let contadorTarjeta = 0;
	let contadorEfectivo = 0;
	let contadorMujeres = 0;
	let contadorHombres = 0;
	let contadorNoBinarios = 0;
	
	while (true) {
	  let nombre = prompt("Ingrese el nombre del titular:");
	  if (!nombre) break;
	
	  let lugar = prompt(
		"Ingrese el lugar (Puerto Madryn, Villa Gessel o Cordoba):"
	  );
	  while (
		lugar !== "Puerto Madryn" &&
		lugar !== "Villa Gessel" &&
		lugar !== "Cordoba"
	  ) {
		lugar = prompt(
		  "Error, ingrese un lugar válido (Puerto Madryn, Villa Gessel o Cordoba):"
		);
	  }
	
	  let temporada = prompt("Ingrese la temporada (alta o baja):");
	  while (temporada !== "alta" && temporada !== "baja") {
		temporada = prompt(
		  "Error, ingrese una temporada válida (alta o baja):"
		);
	  }
	
	  let cantidadDias = parseInt(
		prompt("Ingrese la cantidad de días que durará el viaje:")
	  );
	  while (isNaN(cantidadDias) || cantidadDias <= 0) {
		cantidadDias = parseInt(
		  prompt("Error, ingrese una cantidad de días válida y mayor a cero:")
		);
	  }
	
	  let importe = parseInt(prompt("Ingrese el importe del viaje:"));
	  while (isNaN(importe) || importe <= 0) {
		importe = parseInt(
		  prompt("Error, ingrese un importe válido y mayor a cero:")
		);
	  }
	
	  let altura = parseFloat(prompt("Ingrese la altura del pasajero:"));
	  while (isNaN(altura) || altura <= 0) {
		altura = parseFloat(
		  prompt("Error, ingrese una altura válida y mayor a cero:")
		);
	  }
	
	  let peso = parseFloat(prompt("Ingrese el peso del pasajero:"));
	  while (isNaN(peso) || peso <= 0) {
		peso = parseFloat(
		  prompt("Error, ingrese un peso válido y mayor a cero:")
		);
	  }
	
	  let sexo = prompt(
		"Ingrese el sexo del pasajero (F, M o NB para no binario):"
	  );
	  while (sexo != "F" && sexo != "M" && sexo != "NB") {
		sexo = prompt(
		  "Error, ingrese un sexo válido (F, M o NB para no binario):"
		);
	  }
	
	  let equipajeMano = prompt("¿Viaja con equipaje de mano? (si o no):");
	  while (equipajeMano != "si" && equipajeMano != "no"){
		let equipajeMano = prompt("¿Viaja con equipaje de mano? (si o no):");
	  }















}
