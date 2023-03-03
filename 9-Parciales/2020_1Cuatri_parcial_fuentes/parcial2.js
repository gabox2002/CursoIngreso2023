/*
Ejercicio 2:

Apellido: Quispe
Nombre: Gabriel
Comisión: DIV D
Tutor: Juan Furega

"El gimnasio ""Te pago la cuota pa no ir"",  quiere medir el progreso de sus clientes y saber quien es el más fuerte.
Debemos pedirle al cliente:
Nombre
Edad(debe ser mayor a 12)
Peso(No debe ser negativo)
Género(masculino, femenino, otro)
Peso levantado en press de banca(No debe ser negativo)
Peso levantado en sentadilla(No debe ser negativo)

No sabemos cuántos clientes entran durante el día.
Se debe informar al usuario:
A) El promedio de peso levantado en sentadilla.
B) El porcentaje de clientes por género
C) El nombre y peso de la persona de género masculino que tiene el mayor peso levantado  en press de banca 
D) El genero que mas peso ha levantado en total realizando sentadillas"

*/

function mostrar()
{
var nombreIngresado;
var edadIngresada;
var pesoIngresado;
var generoIngresado;
var pesoLevantadoPressbanca;
var pesoLevantadoSantadilla;
var totalSentadillas;
var totalFemenino;
var totalMasculino;
var totalOtro;
var respuesta;
var pesoMaxLevantado;
var banderaMayorPeso;
var promedioSentadilla;

respuesta = true;
totalFemenino=0;
totalMasculino=0;
totalOtro=0;
banderaMayorPeso=true;

while (respuesta== true){
	nombreIngresado = prompt("ingrese el nombre del cliente:");

	edadIngresada = prompt("Ingrese edad del cliente");
    edadIngresada = parseInt(edadIngresada);
	while(edadIngresada<12){
		edadIngresada = prompt("Reingrese edad del cliente");
    	edadIngresada = parseInt(edadIngresada);
	}

	pesoIngresado = prompt("Ingrese peso del cliente");
    pesoIngresado = parseInt(pesoIngresado);
	while(pesoIngresado<0){
		pesoIngresado = prompt("Reingrese peso del cliente");
    	pesoIngresado = parseInt(pesoIngresado);
	}

    generoIngresado = prompt("Ingrese su genero: masculino, femenino, otro");
    while(generoIngresado != "masculino" && generoIngresado != "femenino" && generoIngresado != "otro")
    {
        generoIngresado = prompt("Reingrese su estado civil: masculino, femenino, otro");
    }
	
	pesoLevantadoPressbanca = prompt("Ingrese el peso levantado en press de banca: ")
	pesoLevantadoPressbanca = parseInt(pesoLevantadoPressbanca);
	while(pesoLevantadoPressbanca<0){
		pesoLevantadoPressbanca = prompt("Reingrese el peso levantado en press de banca::");
    	pesoLevantadoPressbanca = parseInt(pesoLevantadoPressbanca);
	}

	pesoLevantadoSantadilla = prompt("Ingrese el peso levantado en sentadilla: ")
	pesoLevantadoSantadilla = parseInt(pesoLevantadoSantadilla);
	while(pesoLevantadoSantadilla<0){
		pesoLevantadoSantadilla = prompt("Reingrese el peso levantado en sentadilla:");
    	pesoLevantadoSantadilla = parseInt(pesoLevantadoSantadilla);
	}

	switch (generoIngresado){
		case "femenino":
			totalFemenino++;
			break;

		case "masculino":
			totalMasculino++;
			if(pesoIngresado>pesoMaxLevantado || banderaMayorPeso == true){
				pesoMaxLevantado = pesoIngresado;
				nombremaxPeso = nombreIngresado;
				banderaMayorPeso = false;
			}

			break;

		case "otro":
			totalOtro++;			
			break;
		
	}

	totalSentadillas += pesoLevantadoSantadilla

	respuesta = confirm("Deseas ingresar otro cliente?")
}//Fin de while

promedioSentadilla = totalSentadillas / (totalMasculino + totalFemenino + totalOtro);

document.write("El promedio de peso levantado en sentadilla es: " + promedioSentadilla + "<br>");

if(totalMasculino>totalFemenino && totalMasculino > totalOtro)
	{
		generoMasPesoLevantado = "Masculino";
		document.write("El genero que mas levanto sentadilla es: " + generoMasPesoLevantado + "<br>");

	}
	else
	{
		if(totalFemenino>totalOtro && totalFemenino>totalMasculino)
		{
			generoMasPesoLevantado= "Femenino";
			document.write("El genero que mas levanto sentadilla es: " + generoMasPesoLevantado + "<br>");
		}
		else
		{
			generoMasPesoLevantado = "Otro";
			document.write("El genero que mas levanto sentadilla es: " + generoMasPesoLevantado + "<br>");
		}
	}


sumaTotales= totalFemenino + totalMasculino + totalOtro;
if(sumaTotales>0){
	porcentajeMasculino = totalMasculino / sumaTotales;
	porcentajeFemenino = totalFemenino / sumaTotales;
	porcentajeOtro = totalOtro / sumaTotales;

	document.write("El porcentaje de clientes por género es para  " + "masculinos: " + porcentajeMasculino+ "femenino: " + porcentajeFemenino + " y otro: " + porcentajeOtro+"<br>");
}
	else{
		document.write("El porcentaje de clientes por género no se pudo calcular"+"<br>");
	}

	document.write(" El nombre y peso de la persona de género masculino que tiene el mayor peso levantado  en press de banca es: " + nombremaxPeso + " con un peso de: " + pesoMaxLevantado +"<br>");




}