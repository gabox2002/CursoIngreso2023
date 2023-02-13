// Gabriel Quispe DIV D grupo 3 Switch 03
function mostrar()
{
	var mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;
	 
	switch (mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
		break;
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Este mes tiene 30 o más días");
		break;
	}
}//FIN DE LA FUNCIÓN