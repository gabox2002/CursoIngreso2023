/* Gabriel Quispe DIV D grupo 3 While 07
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var seguir;
	var promedio;

	contador=0;
	acumulador=0;
	seguir='si';
	
	do{				 //PRIMERO HACE Y LUEGO EJECUTA SOLO SE HACE UNA VEZ
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;		
		contador = contador + 1;

		seguir = prompt("Desea ingresar otro numero? si/no");

	}while(seguir == "si");

	promedio = acumulador / contador;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}
/*//FIN DE LA FUNCIÓN
	while(seguir == "si"){              
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;		
		contador = contador + 1;

		seguir = prompt("Desea ingrear otro numero? si/no");
	}




	*/