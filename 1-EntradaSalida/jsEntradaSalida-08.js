/* Gabriel Quispe DIV D grupo 3 E/S 08

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resultado;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	dividendo = parseFloat(dividendo);
	divisor = parseFloat(divisor);

	resultado = dividendo % divisor;
	
	alert("El resto es " + resultado);
	
} 
/*
OPERADORES 	
	-ARITMETICOS: sum(+), rest(-), multip(*), div (/) y "Modulo o resto de la división"(%)
		Modulo o resto, permite saber si es par o impar, si el dividendo es multiplo del divisor, etc
	-RELACIONALES: < , > , <= , >= , ==
	-LOGICOS: && , || , 

	Prioridad de operadores (X + Y * Z)   La operación realiza primero la multipliacion por prioridad
	mult, div y resto tienen mas prioridad que la sum y la res

*/
