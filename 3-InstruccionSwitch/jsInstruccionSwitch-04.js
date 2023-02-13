// Gabriel Quispe DIV D grupo 3 Switch 04
function mostrar()
{
	var mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;
	 
	switch (mesDelAño)
	{
		case "Febrero":
			alert("Este mes tiene 28 días.");
		break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 días.")
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 o más días");
		break;
	}
}//FIN DE LA FUNCIÓN