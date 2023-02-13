// Gabriel Quispe DIV D grupo 3 Switch 02
function mostrar()
{
	var mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;
	 
	switch (mesDelAño)
	{
		case "Julio":
			alert("Abrigate que hace frio.");
		break;
		case "Agosto":
			alert("Abrigate que hace frio.");
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
			alert("Ya pasamos el frio, ahora calor!!!");
		break;
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
		break;
	}
}// AGRUPACION DE CASE: FIN DE LA FUNCIÓN