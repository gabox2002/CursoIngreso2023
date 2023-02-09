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
		if(edad < 17)
		{
			alert("Es adolescente");
		}
		else
		{
			alert("Es mayor de edad");
		}
	}
}
/*
anidar --> insercion de un objeto en otro objeto
*/