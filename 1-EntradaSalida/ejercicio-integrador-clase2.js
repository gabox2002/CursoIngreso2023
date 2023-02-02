/* Gabriel Quispe DIV D Grupo 3 Ejercicio Integrador Clase 2

Se ingresará por id el valor de una compra de productos para el hogar. Se deberá agregar el iva (21%) y  luego se deberá restar el 5% en concepto de compra mayorista. El programa deberá mostrar por alert importe bruto, el iva, el importe con iva, el valor del descuento y el total a pagar.
*/
function mostrar()
{ 
    var valor;
    var valorConIva;
    var descuentoMayorista;
    
    valor = document.getElementById("txtIdValor").value;

    valor = parseFloat(valor);

    iva = "21%";

    valorConIva = valor * 1.21;

    descuentoMayorista = valor * 0.05;

    TotalPagar = valorConIva - descuentoMayorista;

    alert("Importe bruto: " + valor + " Iva: " + iva + " Importe con Iva: " + valorConIva + " Descuento: " + descuentoMayorista + " Total a pagar: " + TotalPagar);


}