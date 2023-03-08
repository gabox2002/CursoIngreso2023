/*Ejercicio 3:

Apellido: Quispe
Nombre: Gabriel
Comisión: Div D
Tutor: Juan Furega

"Se nos solicita desarrollar un programa para llevar registro de las ventas y compras en una tienda electrónica. 
Para ello, se solicitará al usuario la siguiente información para cada transacción:

Nombre del cliente
Tipo de transacción (vende o compra)
Precio de la publicación
Tipo de producto (teléfono, tablet o tv)

Para las ventas, se aplicará un 15% en concepto de comisiones de la compañia. Para las compras de tablets, a partir 
de los $10000, se aplicará un descuento del 5%.

 Se deberá mostrar:

A) Dinero total en concepto de compras.
B) Precio promedio de las ventas de tv
C) Total de comisiones recaudadas.

*/
function mostrar() {
    var respuesta;
    var nombreIngresado;
    var tipoTransaccion;
    var precioIngresado;
    var tipoProducto;
    var precioVenta;
    var precioTotaVentasTv;
    var totalVentasTv;
    var comisionesTotales;
    var dineroCompras;
    var promedioVentasTv;

    respuesta = true;
    precioTotaVentasTv=0;
    totalVentasTv=0;
    comisionesTotales=0;
    dineroCompras=0;

    while (respuesta == true) {
        nombreIngresado = prompt("Ingrese nombre del comprador");

        tipoTransaccion = prompt("Ingrese el tipo de transaccion: vende o compra");
        while(tipoTransaccion != "vende" && tipoTransaccion != "compra"){
            tipoTransaccion = prompt("Error! Reingrese el tipo de transaccion: vende o compra");
        }

        precioIngresado = prompt("Ingrese precio de productos comprados: ")
		precioIngresado = parseInt(precioIngresado);
		while (precioIngresado < 1) {//No debe ser cero
			precioIngresado = prompt("Reingrese precio de productos comprados. (No ingresar numeros negativos ni cero)");
			precioIngresado = parseInt(precioIngresado);
		}

        tipoProducto = prompt("Ingrese tipo de producto: telefono, tablet o tv");
        while(tipoProducto != "telefono" && tipoProducto != "tablet" && tipoProducto != "tv"){
            tipoProducto = prompt("Error! Reingrese tipo de producto: telefono, tablet o tv");
        }

        switch (tipoTransaccion) {
            case "vende":
                precioVenta = precioIngresado *1.15;
                if(tipoProducto == "tv"){
                    precioTotaVentasTv += precioVenta;
                    totalVentasTv++;
                }
                comisionesTotales += precioIngresado*0.15;
                break;
            case "compra":
                if(tipoProducto == "tablet" && precioIngresado > 10000){
                    precioIngresado *= 0.95;
                }
                dineroCompras += precioIngresado;
                break;
        }


        respuesta = confirm("DESEAS INGRESAR OTRO DATO?");
    }//Fin del while

    //A) Dinero total en concepto de compras.
    document.write("A) El dinero total en concepto de compras es: " + dineroCompras + "<br>");

    //B) Precio promedio de las ventas de tv

    if(totalVentasTv>0){
        promedioVentasTv = precioTotaVentasTv/totalVentasTv;

        document.write("B) El precio promedio de las ventas de tv es: " + promedioVentasTv + "<br>");
    }
    else{
        document.write("B) El precio promedio de las ventas no se puede calcular" + "<br>");
    }

    //C) Total de comisiones recaudadas.
    document.write("C) El total de comisiones recaudadas es: " +  comisionesTotales+ "<br>");

}