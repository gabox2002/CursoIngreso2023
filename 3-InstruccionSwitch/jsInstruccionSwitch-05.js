// Gabriel Quispe DIV D grupo 3 Switch 05
function mostrar()
{
	var horaDelDia;

	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);

	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
		break;
	}
}//FIN DE LA FUNCIÓN