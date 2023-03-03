// Gabriel Quispe DIV D grupo 3 E/I 05
//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad < 12 || edad > 18)
	{
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN