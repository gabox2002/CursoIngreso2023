// Gabriel Quispe DIV D grupo 3 E/I 04
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad > 12 && edad < 18)
	{
		alert("Es adolescente");
	}
	
}//FIN DE LA FUNCIÓN