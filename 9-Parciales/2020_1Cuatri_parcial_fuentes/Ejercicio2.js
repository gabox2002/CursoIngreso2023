/*Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos //Contador
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.*/

function mostrar()
{
var nombreMascota;
var edadIngresada;
var tipoMascota;
var pesoMascota;
var diagnostico;
var vacuna;
var respuesta;
var nombreMascotaMasVieja;//a
var edadMascotaMasVieja;
var flag;
var contadorMascotaParasito;
var contadorPerro;
var contadorGato;
var contadorHamster;
var nombreMascotaMasJoven;//d
var edadMascotaMasJoven;
var diagnosticoJoven;
var contadorPerroOtitis;

respuesta = true;
flag = 0;
contadorMascotaParasito = 0;
contadorGato = 0;
contadorPerro = 0;
contadorHamster = 0;
flagJoven = 0;
contadorPerroOtitis = 0;

//for (let index = 0; index  < 5; index++) {	cuando ya conoces cuando quieras que pare de dar las vueltas ej: 5
	
do{
	nombreMascota = prompt("Ingrese el nombre de su mascota");

	do {
		edadIngresada = prompt("Ingrese la edad");
		edadIngresada = parseInt(edadIngresada);
	}while(edadIngresada < 1 || edadIngresada > 20);

	do {
		tipoMascota = prompt("Ingrese el tipo de mascota").toLowerCase();
	}while(tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "hamster");

	do{
		pesoMascota = prompt("Ingrese el peso de la mascota");
		pesoMascota = parseInt(pesoMascota);
	}while(pesoMascota < 0);

	do {
		diagnostico = prompt("Ingrese el diagnostico").toLowerCase();
	}while(diagnostico != "problemas digestivos" && diagnostico != "otitis" && diagnostico != "alergias en la piel" && diagnostico != "parasitos");

	do {
		vacuna = prompt("Ingrese si tiene vacuna").toLowerCase();
	}while(vacuna != "si" && vacuna != "no");

	//calculos 
	//a) Nombre de la mascota más vieja con la vacuna antirrábica (MAXIMO)
	if (vacuna == "si"){
		if(edadIngresada > edadMascotaMasVieja || flag == 0){ // no se inicializan max ni min
			flag = 1;
			edadMascotaMasVieja = edadIngresada;
			nombreMascotaMasVieja = nombreMascota;
		}
	}

	//b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
	if(vacuna == "no" && diagnostico == "parasitos"){
		contadorMascotaParasito++;
	}

	//c) El tipo de mascota con más ingresos por problemas digestivos.
	if(diagnostico == "problemas digestivos"){
		switch(tipoMascota){
			case "gato":
				contadorGato++;
				break;
			case "perro":
				contadorPerro++;
				break;
			case "hamster":
				contadorHamster++;
				break;
		}	
	}
	
	//d) Nombre, edad y diagnóstico de la mascota más joven ingresada.(MINIMO)
	if(edadIngresada < edadMascotaMasJoven || flagJoven){ 
		edadMascotaMasJoven = edadIngresada;
		nombreMascotaMasJoven = nombreMascota;
		diagnosticoJoven = diagnostico;
		flagJoven = 1;
	}

	//e) Cantidad de perros ingresados por otitis
	if(tipo == "perro" && diagnostico == "otitis"){
		contadorPerroOtitis++;
	}


	respuesta = prompt("Quieres cargar otra mascota?");

}while(respuesta == true); //Fin de while

//logica comparar fuera del bucle, tener el contador ya contado.
if(contadorGato > contadorPerro && contadorGato > contadorHamster){//c
	document.write("El tipo de mascota con más ingresos por problemas digestivos es " + contadorGato + "<br>");

}
else{
	if (contadorPerro > contadorHamster){
		document.write("El tipo de mascota con más ingresos por problemas digestivos es " + contadorPerro + "<br>");
	}
	else{
		document.write("El tipo de mascota con más ingresos por problemas digestivos es " + contadorHamster + "<br>");
	}
}

document.write("El nombre de la mascota mas vieja es: " + nombreMascotaMasVieja + "<br>");
document.write("La cantidad de mascotas con parasitos sin vacuna es: " + contadorMascotaParasito + "<br>");
document.write("El nombre de la mascota más joven es: " + nombreMascotaMasJoven + ". Su diagnostico es: " + diagnosticoJoven + " y tiene la edad de: " + edadMascotaMasJoven + "<br>");
document.write("Cantidad de perros ingresados por otitis es: " + contadorPerroOtitis);


}