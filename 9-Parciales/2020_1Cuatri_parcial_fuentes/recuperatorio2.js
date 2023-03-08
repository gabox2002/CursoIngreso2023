/*Ejercicio 2:

Apellido: Quispe
Nombre: Gabriel
Comisión: Div D
Tutor: Juan Furega

"Una empresa de energía eléctrica conocida como “Dejamos sin luz a medio país” nos pide realizar un programa 
para analizar el consumo eléctrico de los 1200 usuarios de un pueblo de la provincia de Buenos Aires.
Para ello, es necesario ingresar de cada uno de los clientes:
Nombre del titular.
DNI del titular (no puede ser negativo ni menor a 2 millones)
Edad (Debe ser mayor de edad)
Género (Masculino - Femenino - Otro)
Consumo eléctrico mensual medido en KWh (No menor a 0 y no mayor a 400).

En base a estos datos se pide informar:
A) El usuario de género masculino y menor de 30 años que más consumo eléctrico haya alcanzado.
B) El porcentaje que representa el género femenino del total de clientes.
C) El género que más consumo eléctrico haya tenido EN TOTAL.
D) El promedio de consumo eléctrico de las personas mayores a 60 años. 

*/
function mostrar() {
    var respuesta;
    var nombreIngresado;
    var dniIngresado;
    var edadIngresada;
    var consumoIngresado;
    var consumoFemenino;
    var consumoMasculino;
    var consumoOtro;
    var totalFemenino;
    var totalMasculino;
    var totalOtro;
    var consumoMaxMasculinoMenor30;
    var nombreMasculinoMasConsumo;
    var banderaMaxConsumo;
    var acumuladorConsumoMayor60;
    var totalConsumoMayores60;
    var totalClientes;
    var porcentajeFemenino;
    var generoMasConsumoElectrico;
    var totalMayorConsumo;
    var promedioConsumomayores60;

    respuesta = true;
    consumoFemenino=0;
    consumoMasculino=0;
    consumoOtro=0;
    totalFemenino=0;
    totalMasculino=0;
    totalOtro=0;
    banderaMaxConsumo = true;
    acumuladorConsumoMayor60=0;
    totalConsumoMayores60=0;
    totalClientes=0;

    while (respuesta == true) {
        nombreIngresado = prompt("Ingrese el nombre del titular")

        
        dniIngresado = prompt("Ingrese su dni");
		dniIngresado = parseInt(dniIngresado);
		while (dniIngresado < 2000000 ) {//Mayor que 2000000
			dniIngresado = prompt("Reingrese su dni (no puede ser negativo ni menor a 2millones)");
			dniIngresado = parseInt(dniIngresado);
        }

        edadIngresada = prompt("Ingrese su edad ");
		edadIngresada = parseInt(edadIngresada);
		while (edadIngresada < 18) {//Mayor que 18
			edadIngresada = prompt("Reingrese edad (Tiene que ser mayor a 18)");
			edadIngresada = parseInt(edadIngresada);
        }

        generoIngresado = prompt("Ingrese su genero: masculino, femenino, otro");
        while(generoIngresado != "masculino" && generoIngresado != "femenino" && generoIngresado != "otro"){
            generoIngresado = prompt("Error! Reingrese su estado civil: masculino, femenino, otro");
        }

        consumoIngresado = prompt("Ingrese su consumo electrico");
		consumoIngresado = parseInt(consumoIngresado);
		while (consumoIngresado > 400 || consumoIngresado < 1) {//No debe ser  0 y menor 2000000
			consumoIngresado = prompt("Reingrese su dni (No menor a 0 y no mayor a 400)");
			consumoIngresado = parseInt(consumoIngresado);
        }

        switch (generoIngresado) {
            case "masculino":
                if (edad < 30 && consumoIngresado > consumoMaxMasculinoMenor30 || banderaMaxConsumo == true) {
                    consumoMaxMasculinoMenor30 = consumoIngresado;
                    nombreMasculinoMasConsumo = nombreIngresado;
                    banderaMaxConsumo = false;
                }
                totalMasculino++;
                consumoMasculino += consumoIngresado;
                break;
            case "femenino":
                totalFemenino++;
                consumoFemenino += consumoIngresado;
                break;
        
            default:
                totalOtro++;
                consumoOtro += consumoIngresado;
                break;
        }
        if(edadIngresada > 60){
            acumuladorConsumoMayor60 += consumoIngresado;
            totalConsumoMayores60++;
        }
               
        totalClientes++;

        respuesta = confirm("DESEAS INGRESAR OTRO DATO?");
    }//Fin del while


    //A) El usuario de género masculino y menor de 30 años que más consumo eléctrico haya alcanzado.

    document.write("A) El usuario de género masculino y menor de 30 años que más consumo eléctrico haya alcanzado es " +nombreMasculinoMasConsumo+ "<br>");


    //B) El porcentaje que representa el género femenino del total de clientes.

    porcentajeFemenino = (totalFemenino *100 ) / totalClientes;
    document.write("B) El porcentaje que representa el género femenino del total de clientes es: " + porcentajeFemenino + "<br>");


    //C) El género que más consumo eléctrico haya tenido EN TOTAL.
    if(consumoFemenino>consumoMasculino && consumoFemenino > consumoOtro)
		{
			generoMasConsumoElectrico = "femenino";
            totalMayorConsumo = consumoFemenino;
            document.write("C) El género que más consumo eléctrico haya tenido EN TOTAL es: " + generoMasConsumoElectrico + " con un consumo de: " + totalMayorConsumo + "<br>");

		}
		else
		{
			if(consumoMasculino>consumoOtro && consumoMasculino>consumoFemenino)
			{
				generoMasConsumoElectrico= "masculino";
                totalMayorConsumo = consumoMasculino;
                document.write("C) El género que más consumo eléctrico haya tenido EN TOTAL es: " + generoMasConsumoElectrico + " con un consumo de: " + totalMayorConsumo + "<br>");
			}
			else
			{
				generoMasConsumoElectrico = "otro";
                totalMayorConsumo = consumoOtro;
                document.write("C) El género que más consumo eléctrico haya tenido EN TOTAL es: " + generoMasConsumoElectrico + " con un consumo de: " + totalMayorConsumo + "<br>");
			}
		}


    //D) El promedio de consumo eléctrico de las personas mayores a 60 años. 
    if(totalConsumoMayores60 > 0){
        promedioConsumomayores60 = acumuladorConsumoMayor60 / totalConsumoMayores60;
        document.write("D) El promedio de consumo eléctrico de las personas mayores a 60 años es: " + promedioConsumomayores60 + "<br>");
    } else {
        document.write("D) El promedio de consumo eléctrico de las personas mayores a 60 años no se puede calcular" + "<br>");
    }
     
    

}