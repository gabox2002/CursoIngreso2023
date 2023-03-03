/* Gabriel Quispe DIV D grupo 3 TP 2
Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
function Rectangulo () 
{
    var alambre;
    var largo;
    var ancho;
    var perimetro;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = (ancho + largo)*2;

    alambre = perimetro * 3;

    alert("La cantidad de alambre a comprar es: " + alambre.toFixed(2));   // toFixed(2) en el alert no modifica la variable sino que solo lo lee sin modificarlo
}
function Circulo () 
{
    var radio;
    var perimetro;
    var alambre;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

    perimetro = radio * 2 * Math.PI;

    alambre = perimetro *3;

    alert("Se va a necesitar comprar la cantidad de: " + alambre.toFixed(2) + " hilos de alambre");   //perimetro de un circulo = radio * 2 * pi   Math.PI=3.141509...
}
function Materiales () 
{
	var ancho;
    var largo;
    var area;
    var cemento;
    var cal;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat (largo);
    ancho = parseFloat (ancho);

    area = largo * ancho;

    cemento = area * 2;
    cal = area *3;

    alert("Para un contrapiso de " + area + "m2 se necesitan comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
/*
Area rect= base * altura
1mt2 = 2bol cemento y 3bol de cal ---> aplicar regla de tres
*/    
}