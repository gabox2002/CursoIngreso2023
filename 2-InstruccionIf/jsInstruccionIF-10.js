// Gabriel Quispe DIV D grupo 3 E/I 10
/*Al presionar el Boton, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBO;" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4*/
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