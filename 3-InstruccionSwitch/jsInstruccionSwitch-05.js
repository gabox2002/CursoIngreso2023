// Gabriel Quispe DIV D grupo 3 Switch 05
// Al ingresar una hora, informar: si esta; entre las 7 y las 11 : "Es de mañana.".
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