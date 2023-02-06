// Gabriel Quispe DIV D grupo 3 E/I 05
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