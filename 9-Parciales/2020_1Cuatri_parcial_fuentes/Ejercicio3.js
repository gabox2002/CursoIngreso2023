/* 
EJERCICIO 3
Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos mas abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podran ser cero ni negativo.*/

function mostrar()
{
	var nombreIngresado;
	var materialIngresado;
	var pesoIngresado;
	var alturaIngresada;
	var anchuraIngresada;
	var precioIngresado;
	var contadorMadera;
	var contadorMetal;
	var contadorVidrio;
	var precioPromedio;
	var muebleMetalMasAlto;
	var pesoMuebleMasLiviano;
	var porcentajeMueblesMadera;
	var porcentajeMueblesMetal;
	var porcentajeMueblesVidrio;
	var importeTotal;
	var precioConDescuento;
	var precioConImpuesto;

	respuesta=true;
	acumuladorPrecioTotal=0;
	acumuladorMadera=0;
	acumuladorMetal=0;
	acumuladorVidrio=0;
	contadorMadera=0;
	contadorMetal=0;
	contadorVidrio=0;
	precioPromedio=0;
	contadorTotalMuebles=0;
	muebleMetalMasAlto=0;
	flagMasAlta=true;
	pesoMuebleMasLiviano;
	flagMasLiviano=true;
	pesoMuebleMasLiviano=0;
	importeTotal=0;
	

	do{
		nombreIngresado = prompt("Ingrese el nombre del mueble");

		materialIngresado = prompt("ingrese el material del mueble: Madera, Metal, Vidrio").toLowerCase();
			while (materialIngresado != "madera" && materialIngresado != "metal" && materialIngresado != "vidrio"){
				materialIngresado = prompt("reingrese el material del mueble: Madera, Metal, Vidrio").toLowerCase();
		}

		pesoIngresado = prompt("ingrese el peso del mueble");
		pesoIngresado = parseFloat (pesoIngresado);
			while ( pesoIngresado < 0){
				pesoIngresado = prompt("ingrese un peso positivo");
				pesoIngresado = parseFloat (pesoIngresado); 
			}
		
		alturaIngresada = prompt("ingrese la altura del mueble");
		alturaIngresada = parseFloat (alturaIngresada);
			while ( alturaIngresada < 0){
				alturaIngresada = prompt("ingrese una altura positiva");
				alturaIngresada = parseFloat (alturaIngresada); 
			}

		anchuraIngresada = prompt("ingrese la anchura del mueble");
		anchuraIngresada = parseFloat (anchuraIngresada);
			while ( anchuraIngresada < 0){
				anchuraIngresada = prompt("ingrese una anchura positiva");
				anchuraIngresada = parseFloat (anchuraIngresada); 
			}

		precioIngresado = prompt("ingrese el precio del mueble");
		precioIngresado = parseFloat (precioIngresado);
			while ( precioIngresado < 1){
				precioIngresado = prompt("ingrese un precio mayor a cero y que no sea cero");
				precioIngresado = parseFloat (precioIngresado); 
			}
		
		switch(materialIngresado){
			case "madera":
				contadorMadera++;//b)Cantidad total de muebles de madera
				acumuladorMadera += precioIngresado;
				
				precioConImpuesto = precioConImpuesto * 1.15;//f
				document.write("El Monto total recaudado, pero solo de los muebles de madera con impuestos es: " + precioConImpuesto + "<br>");
				break;

			case "metal":
				contadorMetal++;
				acumuladorMetal += precioIngresado; 

				precioConDescuento = precioConDescuento * 0.9;//g
				document.write("El Monto total recaudado, pero solo de los muebles de madera con descuento es: " + precioConDescuento + "<br>");
				break;	

			case "vidrio":
				contadorVidrio++;				
				acumuladorVidrio += precioIngresado;
				break;
		}
		if(pesoIngresado > pesoMuebleMasLiviano || flagMasLiviano == true){//d)El mueble más liviano
			pesoMuebleMasLiviano = pesoIngresado;
			materialMuebleMasLiviano = materialIngresado;
			flagMasLiviano = false;
		}
		
			respuesta = confirm("Quieres cargar otro mueble");

	}while(respuesta = true); //fin del while

		//a)Precio promedio por mueble vendido
	
		contadorTotalMuebles = contadorMadera + contadorMetal + contadorVidrio;
		
		acumuladorPrecioTotal = acumuladorMadera + acumuladorMetal + acumuladorVidrio;//f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)

		if(contadorTotalMuebles>0){//e)Porcentaje de muebles de cada tipo de material

			porcentajeMueblesMadera = (contadorMadera*100) / contadorTotalMuebles;
			porcentajeMueblesMadera = porcentajeMueblesMadera.toFixed(2);
	
			porcentajeMueblesMetal = (contadorMetal*100) / contadorTotalMuebles;
			porcentajeMueblesMetal = porcentajeMueblesMetal.toFixed(2);

			porcentajeMueblesVidrio = (contadorVidrio*100) / contadorTotalMuebles;
			porcentajeMueblesVidrio = porcentajeMueblesVidrio.toFixed(2);

			document.write("El porcentaje de computadoras de cada marca es: " + "Madera es: " + porcentajeMueblesMadera + ", Metal es:" + porcentajeMueblesMetal + "y de Vidrio es: " + porcentajeMueblesVidrio + "<br>");
		}
		else{
			document.write("El porcentaje de muebles de cada tipo de material no se pudo calcular");
		}

	if(materialIngresado == "madera"){
		precioPromedio = acumuladorMadera / contadorMadera;
		document.write("El precio promedio por mueble vendido es: " + precioPromedio + "<br>");
	}
	else{
		if(materialIngresado == "metal"){
			precioPromedio = acumuladorMetal / contadorMetal;
			document.write("El precio promedio por mueble vendido es: " + precioPromedio + "<br>");

		}else{
			precioPromedio = acumuladorVidrio / contadorVidrio;
			document.write("El precio promedio por mueble vendido es: " + precioPromedio + "<br>");

		}
	}

	importeTotal = contadorTotalMuebles * acumuladorPrecioTotal;
	document.write("El  importe total bruto es: " + importeTotal + "<br>");//d

	document.write("El mueble de metal más alto es: " + muebleMetalMasAlto + "<br>");//C
	document.write("El mueble mas liviano es: " + materialMuebleMasLiviano + "<br>");//d





	










}