// Gabriel Quispe DIV D grupo 3 Switch 01
function mostrar()
{
	var mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;
	 
	switch (mesDelAño)
	{
		case "Enero":
			alert("que comiences bien el año!!!.");
		break;
		case "Marzo":
			alert("a clases!!!.");
		break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
		break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
		break;
	}
}

/*
var color; color = "Azul";

switch (color)
{
	case "Rojo": 
		alert ("El color es primario");
	break; 								//Separa un caso de otro
	case "Azul":
		alert ("El color es primario");
	break;
	case "Amarillo":
		alert ("El color es primario");
	break;
	default:
		alert ("No ingreso un color primario");
}
*/