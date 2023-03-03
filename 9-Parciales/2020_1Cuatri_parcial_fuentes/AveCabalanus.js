/*
Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.*/
function mostrar()
{
	let TOTAL_AVELLANEDA = 20000;
	let TOTAL_CABA = 25000;
	let TOTAL_LANUS = 15000;

	let pesoAvellaneda;
	let pesoCABA;
	let pesoLanus;
	let pesoProducto;
	let descripcionProducto;
	let deposito;
	let banderaPrimerPesoIngresado;
	let pesoMaximo;
	let productoMaximo;
	let ingresosCABA;
	let ingresosAvellaneda;
	let ingresosLanus;
	let mensajeDeSalida;

	pesoAvellaneda = 0;
	pesoCABA = 0;
	pesoLanus = 0;
	ingresosCABA = 0;
	ingresosAvellaneda = 0;
	ingresosLanus = 0;
	banderaPrimerPesoIngresado = true;

	do{

		do {
            deposito = prompt("Ingrese el deposito").toLowerCase();
        }while(deposito != "avellaneda" && deposito != "caba" && deposito != "lanus");

		do{
			descripcionProducto = prompt("Ingrese la descripcion del producto");
		}while(!isNaN(descripcionProducto));

		do{
			pesoProducto = prompt("Ingrese el peso del producto");
			pesoProducto = parseFloat(pesoProducto);
		}while(isNaN(pesoProducto));

		if(pesoProducto > pesoMaximo || banderaPrimerPesoIngresado){//a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio

			pesoMaximo = pesoProducto;
			productoMaximo = descripcionProducto;
			banderaPrimerPesoIngresado = false;
		}

		if(deposito == "caba"){
			if((pesoCABA + pesoProducto) > TOTAL_CABA){
				alert("Deposito lleno");
				continue;
			}
			else{
				pesoCABA += pesoProducto;
				ingresosCABA++;
			}
		}
		else{
			if(deposito == "avellaneda"){
				if((pesoAvellaneda + pesoProducto) > TOTAL_AVELLANEDA){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoAvellaneda += pesoProducto;
					ingresosAvellaneda++;
				}
			}
			else{
				if((pesoLanus + pesoProducto) > TOTAL_LANUS){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoLanus += pesoProducto;
					ingresosLanus++;
				}
			}
		}

	}while(confirm("Desea realizar otro deposito?"));

	//a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio

	mensajeDeSalida = "a) El producto con mas peso es: " + productoMaximo + " con " + pesoMaximo + " KG.\ Su promedio es: " + pesoMaximo / (pesoAvellaneda + pesoCABA +pesoLanus);

	//b) Cual fue la bodega con mas ingresos.

	if(ingresosAvellaneda > ingresosCABA && ingresosAvellaneda > ingresosLanus){
		mensajeDeSalida += "\nb) La bodega con mas ingresos es: Avellaneda";
	}
	else{
		if(ingresosCABA > ingresosLanus){
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: CABA";
		}
		else{
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: Lanus";
		}
	}

	//c) Cual es la bodega mas llena.

	if(pesoAvellaneda > pesoCABA && pesoAvellaneda > pesoLanus){
		mensajeDeSalida += "\nc) La bodega mas llena es: Avellaneda";
	}
	else{
		if(pesoCABA > pesoLanus){
			mensajeDeSalida += "\nc) La bodega mas llena es: CABA";
		}
		else{
			mensajeDeSalida += "\nc) La bodega mas llena es: Lanus";
		}
	}

	//d) Porcentaje disponible de cada bodega.
	mensajeDeSalida += "\nd) Avellaneda: %" + pesoAvellaneda * 100 / TOTAL_AVELLANEDA + "\nCABA: % " + pesoCABA * 100 / TOTAL_CABA + "\nLanus: % " + pesoLanus * 100 / TOTAL_LANUS;

	alert(mensajeDeSalida);
}

