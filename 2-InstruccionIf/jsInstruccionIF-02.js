// Gabriel Quispe DIV D grupo 3 E/I 02
//Al ingresar una edad debemos informar solo si la persona es mayor de edad
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad >= 18)
	{
		alert("Es mayor de edad");
	}

}//FIN DE LA FUNCIÓN

// 	Relacionales: < , > , <= , >= , == , != (permite relacionar cosas devuelven un booleano
