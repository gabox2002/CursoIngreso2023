/* Gabriel Quispe DIV D grupo 3 E/S 06

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var unNumero;
	var otroNumero;
	var suma;

	unNumero = document.getElementById("txtIdNumeroUno").value;
	otroNumero = document.getElementById("txtIdNumeroDos").value;

	unNumero = parseFloat(unNumero);
	otroNumero = parseFloat(otroNumero);

	suma = unNumero + otroNumero;
	
	alert("La suma es " + suma);
} 

/* 
parseInt = convierte en no numerico a numerico ENTERO
parseFloat = al igual que parseINt solo que filtra caracteres y puntos 
casting o castear = cambia tipo de dato del valor de una expresion
txtIdNumeroUno
txtIdNumeroDos
*/