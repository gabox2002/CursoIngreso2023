// Gabriel Quispe DIV D grupo 3 E/I 01
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad == 15)
	{
		alert("Niña bonita");
	}

	alert("Fin del programa");
}

//FIN DE LA FUNCIÓN

/*
if(condicion)
{ 
	sentencias;
}
condicion	--> booleano (valor que puede asumir dos valores, verdadero o falso)
	true = 1 = encendido
	false = 0 = apagado

Operadores
	Aritmeticos: + , - * / %
	Relacionales: < , > , <= , >= , == , != (permite relacionar cosas devuelven un booleano
	Lógicos: ! (negacion), && (y logico). || (o logico) unir condiciones (trabajan con booleanos en funcion al operador y establecer un nuevo valor de verdad)
*/