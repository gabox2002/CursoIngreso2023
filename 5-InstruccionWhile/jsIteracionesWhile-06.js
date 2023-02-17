// Gabriel Quispe DIV D grupo 3 While 06
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador = 0; //variable control del programa
	acumulador = 0;
	
	while(contador < 5){
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		
		contador = contador + 1;
	}

	promedio = acumulador / contador;
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
}
//FIN DE LA FUNCIÓN

/* 
contador = contador +1;
contador ++;
contador += 1;

acumulador = variable + variable   |  Contador =  contador + 1 
saldo      = saldo    + importe    |  contador =  variable + constante

txtIdSuma txtIdPromedio
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

un valor en particular :0
while (numero == 0)

un rango infinito: numero positivos
while(numero <1)

lista de elementos: (Amarillo azul y verde)
color=prompt....
while(color != "amarillo" && color != "Azul && color != "Verde")
while(color != "amarillo" || color != "Azul || color != "Verde")


*/