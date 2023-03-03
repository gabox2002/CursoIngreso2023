// Gabriel Quispe DIV D grupo 3 E/I 06
/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/
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