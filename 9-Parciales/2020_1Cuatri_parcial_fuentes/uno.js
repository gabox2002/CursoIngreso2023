/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

d) Del más caro de los jabones, la cantidad de unidades y el fabricante
e) Del tipo de producto con más unidades en total de la compra, el promedio por compra
f) Cuántas unidades de Barbijos se compraron en total
*/

function mostrar()
{
	var contador;
	var promedio;
	var tipoProducto;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var precioDeAlcoholMasBarato;
	var contadorAlcohol;
	var contadorBarbijos;
	var contadorJabones;
	var acumuladorAlcohol;
	var acumuladorBarbijos;
	var acumuladorJabones;
	var unidadesAlcoholBarato;
	var marcaAlcoholBarato;
	var fabricanteAlcoholBarato;
	var tipoProductoMasUnidades;

	contador = 0;
	contadorAlcohol = 0;
	contadorBarbijos = 0;
	contadorJabones = 0;
	acumuladorJabones = 0;
	acumuladorBarbijos = 0;
	acumuladorAlcohol = 0;

	while(contador < 5){
		tipoProducto = prompt("Ingrese el tipo de producto");
		while(tipoProducto != "barbijo" && tipoProducto != "jabón" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("Ingrese nuevamente otro tipo de producto");
		}

		precio = prompt("Ingrese el precio del producto");
		precio = parseFloat(precio);

		while(precio < 100 || precio > 300)
		{
			precio = prompt("Ingrese nuevamente el precio del producto");
			precio = parseFloat(precio);
		}

		cantidadUnidades = prompt("Ingrese la cantidad de unidades");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("Ingrese nuevamente la cantidad de unidades");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("Ingrese la marca");

		fabricante = prompt("Ingrese el fabricante");

		contador++;

		switch(tipoProducto)
		{
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
				if(precio < precioDeAlcoholMasBarato || contadorAlcohol == 1)
				{
					precioDeAlcoholMasBarato = precio;
					unidadesAlcoholBarato = cantidadUnidades;
					fabricanteAlcoholBarato = fabricante;
					marcaAlcoholBarato = marca;
				}
			break;
			
			case "jabón":
				contadorJabones++;
				acumuladorJabones = acumuladorJabones + cantidadUnidades;
			break;
			case "barbijo":
				contadorBarbijos++;
				acumuladorBarbijos = acumuladorBarbijos + cantidadUnidades;
			break;
		}
		
	}// fin delwhile

	if(acumuladorAlcohol>acumuladorJabones && acumuladorAlcohol > acumuladorBarbijos)
		{
			promedio = acumuladorAlcohol / contadorAlcohol; //b) Del tipo con mas unidades, el promedio por compra
			tipoProductoMasUnidades = "alcohol";
		}
		else
		{
			if(acumuladorJabones>acumuladorBarbijos && acumuladorJabones>acumuladorAlcohol)
			{
				promedio = acumuladorJabones / contadorJabones;
				tipoProductoMasUnidades= "jabón";
			}
			else
			{
				//barbijo
				promedio = acumuladorBarbijos / contadorBarbijos;
				tipoProductoMasUnidades = "barbijo";
			}
		}
	if (contadorAlcohol==0)
	{
		document.write("A- No se ingresó ningun alcohol. <br>");
	}
	else
	{
		document.write("A- La cantidad de unidades del alcohol mas barato es: " + unidadesAlcoholBarato + " el fabricante es: " 
		+ fabricanteAlcoholBarato + " de la marca: " + marcaAlcoholBarato + "<br>");
	}
	
	document.write("B- El tipo con mas unidades es: " + tipoProductoMasUnidades + " con un promedio de: " + promedio + "<br>");
	document.write("C- Hay " + acumuladorJabones + " jabones.");
}

