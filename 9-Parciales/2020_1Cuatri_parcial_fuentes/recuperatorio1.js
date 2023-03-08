/*Ejercicio 1:

Apellido: Quispe
Nombre: Gabriel
Comisión: Div D
Tutor: Juan Furega

"UTN-Gob realiza un censo en un barrio privado, se pregunta por:  nombre, genero (F/M/NB), edad, estado civil
(1- para soltero, 2- para casados, 3- para divorciados y 4- para viudos).
Informar:

- Cantidad de ciudadanos solteros o viudos de genero masculino que tengan entre 18 y 33 años.
- Porcentaje de habitantes de genero No Binario.
- Edad promedio de solteros mayores a 18.
- Nombre de la persona mas vieja."

*/
function mostrar() {
    var respuesta;
	var nombreIngresado;
	var edadIngresada;
	var generoIngresado;
	var estadoCivilIngresado;
	var totalHabitantes;
	var totalNoBinario;
	var totalSolteroMayor18;
	var totalSolterosViudosMasculinosEntre18y33;
	var banderaMaxVieja;
	var porcentajeNoBinario;
	var edadMaxVieja;
	var edadPromedioSolterosMayores18;

    respuesta = true;
	totalHabitantes=0;
	totalNoBinario=0;
	totalSolteroMayor18=0;
	totalSolterosViudosMasculinosEntre18y33=0;
	banderaMaxVieja= true;

    while (respuesta == true) {
		
		nombreIngresado = prompt("Ingrese su nombre");

		edadIngresada = prompt("Ingrese su edad");
		edadIngresada = parseInt(edadIngresada);
		while (edadIngresada < 1) {//no debe ser cero
			edadIngresada = prompt("Reingrese su edad");
			edadIngresada = parseInt(edadIngresada);
		}

		generoIngresado = prompt("Ingrese su genero: m(masculino), f(femenino), nb(no binario)");
        while(generoIngresado != "m" && generoIngresado != "f" && generoIngresado != "nb"){
            generoIngresado = prompt("Error! Reingrese su estado civil: m(masculino), f(femenino), nb(no binario)");
        }

		estadoCivilIngresado = prompt(" Ingrese su estado civil:  \n1-para soltero, \n2-para casados, \n3-para divorciados \n4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
		while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4){ 
			estadoCivilIngresado = prompt(" Ingrese su estado civil: \n1-para soltero \n2-para casados \n3-para divorciados \n4-para viudos");
			estadoCivilIngresado = parseInt(estadoCivilIngresado);
		}
        
		if (generoIngresado == "masculino" && (estadoCivilIngresado == 1 || estadoCivilIngresado == 4) && edadIngresada >18 && edadIngresada < 33) {		
			totalSolterosViudosMasculinosEntre18y33++;
		}
		
				if(generoIngresado == "nb"){//b
			totalNoBinario++;
		}

		if(estadoCivilIngresado == 1 && edadIngresada >18); //c
		totalSolteroMayor18 += edadIngresada;

		if(edadIngresada>edadMaxVieja || banderaMaxVieja == true){//d
			edadMaxVieja = edadIngresada;
			nombreMasVieja = nombreIngresado;
			banderaMaxVieja = false;
		}

		totalHabitantes++;

        respuesta = confirm("DESEAS INGRESAR OTRO DATO?");
    }//Fin del while


	//A) Cantidad de ciudadanos solteros o viudos de genero masculino que tengan entre 18 y 33 años.
	document.write("A) La cantidad de ciudadanos solteros o viudos de genero masculino que tengan entre 18 y 33 años es: " + totalSolterosViudosMasculinosEntre18y33 + "<br>");

	//B) Porcentaje de habitantes de genero No Binario.
	porcentajeNoBinario = (totalNoBinario * 100) / totalHabitantes;
    document.write("B) El porcentaje de habitantes de genero No Binario es: " + porcentajeNoBinario +"<br>");

	//C) Edad promedio de solteros mayores a 18.
	edadPromedioSolterosMayores18 = totalSolteroMayor18 / totalHabitantes;
    document.write("C) la edad promedio de solteros mayores a 18" + edadPromedioSolterosMayores18 +"<br>");

	//D) Nombre de la persona mas vieja."
       document.write("D) El nombre de la persona mas vieja" + nombreMasVieja + "<br>");

}