/* Gabriel Quispe DIV D grupo 3 While 10
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
10-Maximo y minimo
11-Porcentaje de números positivos y negativos.
12-De los positivos el más grande.
13-De los negativos el más chico. */
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos; //acumulador
	var sumaPositivos; //acumulador
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var numeroMaximo;
	var numeroMinimo;
	var promedioPositivos;
	var promedioNegativos;
	var contador;
	var diferencia;
	var porcentajePositivos;
	var porcentajeNegativos;
	var minimoNegativo;
	var maximoPositivo;

	sumaNegativos = 0; //acumulador
	sumaPositivos = 0; //acumulador
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	contador = 0;

	respuesta="si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);
		while(numeroIngresado < -1505 || numeroIngresado > 3897){ //entre -1505 y 3897
			numeroIngresado = prompt("Ingrese un número: ");
			numeroIngresado = parseInt(numeroIngresado);
		}
		//maximo y minimo para cualquier numero
		if(numeroIngresado > numeroMaximo || contador == 0){
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado<numeroMinimo || contador == 0){
			numeroMinimo = numeroIngresado;
		}

		if(numeroIngresado < 0){ //es negativo
			
			if(numeroIngresado<minimoNegativo || contadorNegativos == 0)
			{
				minimoNegativo = numeroIngresado;//10-Minimo
			}
			sumaNegativos = sumaNegativos + numeroIngresado;//sumaNegativos += numeroIngresado;  1-Suma de los negativos.
			contadorNegativos++; //4-Cantidad de negativos.
		}
		else{
			if(numeroIngresado > 0){ //es positivo
				
				if(numeroIngresado>maximoPositivo || contadorPositivos == 0)
				{
					maximoPositivo = numeroIngresado;//10-Maximo 
				}
				sumaPositivos = sumaPositivos + numeroIngresado; //2-Suma de los positivos.
				contadorPositivos++; //3-Cantidad de positivos.
			}
			else{
				contadorCeros++; //5-Cantidad de ceros.

			}
		}
		
		if(numeroIngresado % 2 == 0){
			contadorPares++;//6-Cantidad de números pares.
		}
		
		contador++;

		respuesta = prompt("desea continuar? si/no");
	}//Fin del while

	diferencia = sumaPositivos - sumaNegativos;//9-Diferencia entre positivos y negativos,

	porcentajePositivos = (contadorPositivos*100) / contador; //11-Porcentaje de números positivos.
	porcentajePositivos = porcentajePositivos.toFixed(2);

	porcentajeNegativos = (contadorNegativos*100) / contador; //11-Porcentaje de números negativos.
	porcentajeNegativos = porcentajeNegativos.toFixed(2);
	
	document.write("1. La suma de negativos es: " + sumaNegativos + "<br>");
	document.write("2. La suma de positivos es: " + sumaPositivos + "<br>");
	document.write("3. La cantidad de positivos es: " + contadorPositivos + "<br>");
	document.write("4. La cantidad de negativos es: " + contadorNegativos + "<br>");
	document.write("5. La cantidad de ceros es: " + contadorCeros + "<br>");
	document.write("6. La cantidad de números pares es: " + contadorPares + "<br>");
	
	if(contadorPositivos > 0){
		promedioPositivos = sumaPositivos / contadorPositivos; //7-Promedio de positivos.
		document.write("7. El promedio de positivos es: " + promedioPositivos + "<br>");
		document.write("12. El número positivo más grande es: " + maximoPositivo + "<br>");

	}
	else{
		document.write("7. El promedio de positivos no se pudo calcular" + "<br>");
		document.write("12. No hay número máximo positivo" + "<br>");
	}

	if(contadorNegativos > 0){
		promedioNegativos = sumaNegativos / contadorNegativos;//8-Promedios de negativos.
		document.write("8. El promedio de negativos es: " + promedioNegativos + "<br>");
		document.write("13. El número negativo más chico es: " + minimoNegativo + "<br>");

	}
	else{
		document.write("8. El promedio de negativos no se pudo calcular" + "<br>");
		document.write("12. No hay número mínimo negativo" + "<br>");

	}

	document.write("9. La diferencia entre positivos y negativos es: " + diferencia + "<br>");
	document.write("10. El máximo es: " + numeroMaximo + " y el mínimo es: " + numeroMinimo + "<br>");
	document.write("11. El porcentaje de números positivos es de " + porcentajePositivos + "% y el porcentaje de números negativos es " + porcentajeNegativos + "%" + "<br>");

}//FIN DE LA FUNCIÓN
