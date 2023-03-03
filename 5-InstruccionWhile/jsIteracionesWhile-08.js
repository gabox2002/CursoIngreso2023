/*Gabriel Quispe DIV D grupo 3 While 08
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;   
	var numeroIngresado;
	var sumaPositivos;  
	var multiplicacionNegativos;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";
	
	do{				 
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado > -1){
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

		respuesta = prompt("Desea ingresar otro numero? si/no");

	}while(respuesta == "si");

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;
	
}
//FIN DE LA FUNCIÓN