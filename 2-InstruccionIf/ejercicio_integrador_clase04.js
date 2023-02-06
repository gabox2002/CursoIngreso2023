/* Gabriel Quispe DIV D Grupo 3 Ejercicio Integrador Clase 4
Ingresar 3 edades por prompt. Determinar si la primera es mayor que la segunda y menor que la tercera o la tercera es menor que la segunda. Mostrar por alert si se cumple o no.
*/
function mostrar()
{
	var edadUno;
    var edadDos;
    var edadTres;

	edadUno = prompt("ingrese primera edad");
    edadDos = prompt("ingrese segunda edad");
	edadTres = prompt("ingrese tercera edad");
    edadUno = parseInt(edadUno);
    edadDos = parseInt(edadDos);
    edadTres = parseInt(edadTres);

if (edadUno > edadDos && edadUno < edadTres || edadTres < edadDos)
    {
        alert("Si cumple la función");
    }
else
    {
        alert("No cumple la función");
    }
}
