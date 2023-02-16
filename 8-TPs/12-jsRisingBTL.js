/* Gabriel Quispe DIV D grupo 3 Ejercicio Integrador While Clase 08
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 80000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoIngresado;
	var legajoIngresado;
	var nacionalidadIngresada;

	edadIngresada = prompt("Ingrese su edad");
	edadIngresada = parseInt(edadIngresada);

	while(edadIngresada < 18 || edadIngresada > 90){
		edadIngresada = prompt("Ingrese su edad");
		edadIngresada = parseInt(edadIngresada);
	}
	txtIdEdad.value = edadIngresada;

	sexoIngresado = prompt("Ingrese su sexo: F o M");

	while(sexoIngresado != "F" && sexoIngresado != "M"){
		sexoIngresado = prompt("Ingrese su sexo: F o M");
	}
	txtIdSexo.value = sexoIngresado;

	estadoCivilIngresado = prompt(" Ingrese su estado civil:  \n1-para soltero, \n2-para casados, \n3-para divorciados \n4-para viudos");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4){
		estadoCivilIngresado = prompt(" Ingrese su estado civil: \n1-para soltero \n2-para casados \n3-para divorciados \n4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}
	txtIdEstadoCivil.value = estadoCivilIngresado;

	sueldoIngresado = prompt("Ingrese su sueldo bruto");
	sueldoIngresado = parseInt(sueldoIngresado);

	while(sueldoIngresado < 80000){
		sueldoIngresado = prompt("Ingrese su sueldo bruto");
		sueldoIngresado = parseInt(sueldoIngresado);
	}
	txtIdSueldo.value = sueldoIngresado

	legajoIngresado = prompt("Ingrese su numero de legajo");

	while(legajoIngresado < 1000 || legajoIngresado > 9999){
		legajoIngresado = prompt("Ingrese su numero de legajo");
	}
	txtIdLegajo.value = legajoIngresado;
	
	nacionalidadIngresada = prompt("Ingrese su nacionalidad: \n“A” para argentinos \n“E” para extranjeros \n“N” para nacionalizados");

	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N"){
		nacionalidadIngresada = prompt("Ingrese su nacionalidad: \n“A” para argentinos \n“E” para extranjeros \n“N” para nacionalizados");
	}
	txtIdNacionalidad.value = nacionalidadIngresada;
}