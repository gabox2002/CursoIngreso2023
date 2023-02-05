/* Gabriel Quispe DIV D grupo 3 E/S 07

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var resultado;
	var num1;
	var num2;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseFloat(num1)
	num2 = parseFloat (num2)

	resultado = num1 + num2;
	
	alert("La suma es " + resultado);
		
} 

function restar()
{
	var num1;
	var num2;
	var resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseFloat(num1)
	num2 = parseFloat (num2)

	resultado = num1 - num2;
	
	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	var num1;
	var num2;
	var resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseFloat(num1)
	num2 = parseFloat (num2)

	resultado = num1 * num2;
	
	alert("El producto es " + resultado);
}

function dividir()
{
	var num1;
	var num2;
	var resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseFloat(num1)
	num2 = parseFloat (num2)

	resultado = num1 / num2;
	
	alert("El cociente es " + resultado);
}

/*
textIdNumeroUno
textIdNumeroDos
alert(typeof resultado) Ve que tipo es: String o Number
la SUMA es el unico operador con doble funcion de sumar y concatenar
la Division para dividir entre cero se usa IF porque deberia arrojar ERROR
*/