// Gabriel Quispe DIV D grupo 3 E/I 06
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad < 13)
	{
		alert("Es niño");
	}
	else
	{
		if(edad < 18)
		{
			alert("Es adolescente");

		}
		else
		{
			alert("es adulto");
		}
	}


}//FIN DE LA FUNCIÓN

/*
Clase 04
Aspectos a evaluar:
Uso correcto de métodos de entrada y salida de datos (alert, prompt, document.getElementById)
Uso correcto de variables y sus identificadores (nombres de variables)
Concatenación
Uso de parseInt / parseFloat
Condicionales simples y dobles.
Uso de operadores aritméticos, relacionales y lógicos.

Ingresar 3 edades por prompt. Determinar si la primera es mayor que la segunda y menor que la tercera o la tercera es menor que la segunda. Mostrar por alert si se cumple o no.


*/