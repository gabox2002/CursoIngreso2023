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
10-Porcentaje de números positivos y negativos.
11-De los positivos el más grande.
12-De los negativos el más chico. */
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos = 0; 
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var numeroMaximo;
	var numeroMinimo;
	var banderaDelPrimero = false;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var contador = 0;
	var diferencia;
	var porcentajePositivos;
	var porcentajeNegativos;

	do
	{
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);

		contador++;

		if(numeroIngresado < 0){
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos++;
		}
		else{
			if(numeroIngresado > 0){
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivos++;
			}
			else{
				if(numeroIngresado == 0){
					contadorCeros++;
				}
			}
		}
		if(numeroIngresado % 2 == 0){
			contadorPares++;
		}
		if(banderaDelPrimero == false){ 
			numeroMaximo = numeroIngresado;	
			numeroMinimo = numeroIngresado;

			banderaDelPrimero = true;
		}
		else{
			if(numeroIngresado > numeroMaximo){
				numeroMaximo = numeroIngresado;	
			}
			else{
				if(numeroIngresado < numeroMinimo){
					numeroMinimo = numeroIngresado
				}
			}
		}
		respuesta = prompt("desea continuar? si/no");
		
	}while(respuesta == "si");

	if(contadorPositivos > 0){
		promedioPositivos = sumaPositivos / contadorPositivos;
	}
		
	if(contadorNegativos > 0){
		promedioNegativos = sumaNegativos / contadorNegativos;
	}

	diferencia = sumaPositivos - (-sumaNegativos);

	porcentajePositivos = (contadorPositivos*100) / contador;
	porcentajePositivos = porcentajePositivos.toFixed(2)

	porcentajeNegativos = (contadorNegativos*100) / contador;
	porcentajeNegativos = porcentajeNegativos.toFixed(2)
	
	document.write("La suma de negativos es: " + sumaNegativos);
	document.write("<br>");
	document.write("La suma de positivos es: " + sumaPositivos);
	document.write("<br>");
	document.write("La cantidad de positivos es: " + contadorPositivos);
	document.write("<br>");
	document.write("La cantidad de negativos es: " + contadorNegativos);
	document.write("<br>");
	document.write("La cantidad de ceros es: " + contadorCeros);
	document.write("<br>");
	document.write("La cantidad de números pares es: " + contadorPares);
	document.write("<br>");
	document.write("El promedio de positivos es: " + promedioPositivos);
	document.write("<br>");
	document.write("El promedio de negativos es: " + promedioNegativos);
	document.write("<br>");
	document.write("La diferencia entre positivos y negativos es: " + diferencia);
	document.write("<br>");
	document.write("El porcentaje de números positivos es de " + porcentajePositivos + "% y el porcentaje de números negativos es " + porcentajeNegativos + "%");
	document.write("<br>");
	document.write("El número positivo más grande es: " + numeroMaximo);
	document.write("<br>");
	document.write("El número negativo más chico es: " + numeroMinimo);
}//FIN DE LA FUNCIÓN
