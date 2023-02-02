/* Gabriel Quispe DIV D grupo 3 E/S 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
Ingresar Apellido por prompt y mostrar la salida por ID
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{//Indentación despues de una llave y un TAB espaciado	
	var nombreIngresado; 
	var apellidoIngresado;
	var edadIngresado
	var mensaje

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadDelAlumno = document.getElementById("txtIdEdad").value;
	apellidoIngresado = prompt ("Ingrese el apellido");

	mensaje = "usted se llama " + nombreIngresado + " " + apellidoIngresado +" y tiene " + 			edadDelAlumno + " años";

	txtIdMensaje.value = mensaje;//Mostrar salida por ID no por alert


} 


/*
txtIdNombre
txtIdEdad
txtIdMensaje
concatenar -> poner algo al lado de otro nombre

Entradas: prompt - id (edad = id.value)
Procesos: concatenar
Salidas: alert - id (id.value = edad)

*/