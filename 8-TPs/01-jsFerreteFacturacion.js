/* Gabriel Quispe DIV D grupo 3 TP 1

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultadoSuma;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    resultadoSuma = precioUno + precioDos + precioTres;

    alert("El precio total por los productos es " + resultadoSuma);
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultadoPromedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    resultadoPromedio = (precioUno + precioDos + precioTres)/3;
    resultadoPromedio = resultadoPromedio.toFixed(2);

    alert("El promedio de los productos es " + resultadoPromedio);
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultadoSuma;
    var resultadoConIva;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    resultadoSuma = precioUno + precioDos + precioTres;
    resultadoConIva = resultadoSuma * 1.21;

    alert("El precio final con Iva incluido es " + resultadoConIva);  //resultadoConIva = resultadoConIva.toFixed(2);
}

/* 
toFixed nos indica cuantos decimales queremos ver y no sean infinitos
*/