// Gabriel Quispe DIV D grupo 3 E/I 03
//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad >= 18)
	{
		alert("Es mayor de edad");
	}
	else
	{
		alert("No es mayor de edad");
	}

}
/*FIN DE LA FUNCIÓN     
el else no tiene condicion*/