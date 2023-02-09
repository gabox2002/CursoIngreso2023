// Gabriel Quispe DIV D grupo 3 E/I 10
function mostrar()
{
	var nota;

	nota= Math.floor(Math.random() * 10) +1;

	alert(nota);

	if(nota == 9 || nota == 10)
	{
		alert("Excelente");
	}
	else
	{
		if(nota >= 4 && nota <9)
		{
			alert("Aprobó");
		}
		else{
			alert("Vamos, la próxima se puede");
		}
	}
}
//Genero el número RANDOM entre 1 y 10 