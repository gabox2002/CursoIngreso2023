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
var pesoLevantadoSentadilla;
var pesoTotalSentadillas;
var totalFemenino;
var totalMasculino;
var totalOtro;
var respuesta;
var pesoMaxLevantado;
var promedioSentadilla;
var porcentajeFemenino;
var porcentajeMasculino;
var porcentajeOtro;
var acumuladorSentadillaFemenino;
var acumuladorSentadillaMasculino;
var acumuladorSentadillaOtro;

respuesta = true;
totalFemenino=0;
totalMasculino=0;
totalOtro=0;
pesoTotalSentadillas=0;
contadorClientes=0;
acumuladorSentadillaFemenino=0;
acumuladorSentadillaMasculino=0;
acumuladorSentadillaOtro=0;


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
	while(pesoIngresado<1){//Diferente de cero
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

	pesoLevantadoSentadilla = prompt("Ingrese el peso levantado en sentadilla: ")
	pesoLevantadoSentadilla = parseInt(pesoLevantadoSentadilla);
	while(pesoLevantadoSentadilla<0){
		pesoLevantadoSentadilla = prompt("Reingrese el peso levantado en sentadilla:");
    	pesoLevantadoSentadilla = parseInt(pesoLevantadoSentadilla);
	}

	switch (generoIngresado){
		case "femenino":
			totalFemenino++;
			acumuladorSentadillaFemenino += pesoLevantadoSentadilla;
			break;

		case "masculino":
			totalMasculino++;
			if(pesoLevantadoPressbanca>pesoMaxLevantado || totalMasculino == 0){//C
				pesoMaxLevantado = pesoLevantadoPressbanca;
				nombremaxPeso = nombreIngresado;
			}
			acumuladorSentadillaMasculino += pesoLevantadoSentadilla;
			break;

		case "otro":
			totalOtro++;
			acumuladorSentadillaOtro += pesoLevantadoSentadilla;			
			break;
		
	}
	contadorClientes++;
	pesoTotalSentadillas += pesoLevantadoSentadilla;

	respuesta = confirm("Deseas ingresar otro cliente?")
}//Fin de while


promedioSentadilla = pesoTotalSentadillas / contadorClientes;
document.write("El promedio de peso levantado en sentadilla es: " + promedioSentadilla + "<br>");

document.write(" El nombre y peso de la persona de género masculino que tiene el mayor peso levantado  en press de banca es: " + nombremaxPeso + " con un peso de: " + pesoMaxLevantado +"<br>");

if(totalMasculino>totalFemenino && totalMasculino > totalOtro){//D) El genero que mas peso ha levantado en total realizando sentadillas"	
		generoMasPesoLevantado = "Masculino";
		document.write("El genero Masculino levanto mas sentadilla con: " + generoMasPesoLevantado + "<br>");
	}
	else
	{
		if(totalFemenino>totalOtro && totalFemenino>totalMasculino){
			generoMasPesoLevantado= "Femenino";
			document.write("El genero Femenino  levanto mas sentadilla con: " + generoMasPesoLevantado + "<br>");
		}
		else
		{
			generoMasPesoLevantado = "Otro";
			document.write("Otro genero levanto mas sentadilla con: " + generoMasPesoLevantado + "<br>");
		}
	}

	//No hago la restriccion porque contadorClientes unca es cero
porcentajeMasculino = totalMasculino *100 / contadorClientes;
porcentajeFemenino = totalFemenino *100 / contadorClientes;
porcentajeOtro = totalOtro *100	/ contadorClientes;

	document.write("El porcentaje de clientes por género es: " + "masculinos: " + porcentajeMasculino+ "%. Femenino: " + porcentajeFemenino + "% y otro: " + porcentajeOtro + "% <br>");



}