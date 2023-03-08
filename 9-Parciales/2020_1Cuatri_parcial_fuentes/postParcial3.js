/*Ejercicio 3:

Apellido: Quispe
Nombre: Gabriel
Comisión: Div D
Tutor: Juan Furega

"Un cliente de ""Gonzi-Expres"" desea agregar a su carrito de compras (no sabemos cuantos productos son).
Para ello se ingresa:
- Nombre del producto
- Precio (EN USD)
- Origen (EEUU, China, España)

Por cada producto proveniente de CHINA se agregará al precio del mismo un 5%, debido al impuesto de productos Electronicos provenientes de ese pais.

Si el importe final de todos los productos comprados supera los 50 usd tendrá que pagar un 50% de impuestos por la importación de los mismos.

Por ejemplo ""Si gaste 45 usd en total sólo pago 45, pero si gaste 100 usd tengo que pagar 150""
Como la compra es en dolares, al total de la misma se le deberá agregar el impuesto pais del 35%.

A) Mostrar el total a pagar en pesos (1DOLAR oficial = $205)
B) Cual es el total a pagar, pero solo de productos provenientes de EEUU.
C) El nombre del producto mas caro, de origen Español.
D) Cantidad de productos cuyo precio este entre USD 5 y USD 15 (incluyendo impuestos), provenientes de China o EEUU"

*/
function mostrar() {
    var respuesta;
    var nombreProducto;
    var precio;
    var origen;
    var acumuladorPrecioEEUU;
    var productosEEUU;
    var precioProductoConImpuestoChina;
    var productosChina;
    var banderaProductoMasCaro;
    var precioProductoMasCaro;
    var nombreProductoMasCaro;
    var cantidadProductosChEeuu;
    var totalUSD;
    var totalImpuestosImportacion;
    var totalImpuestoPais;
    var totalAPagar;
    var totalAPagarEEUU;
    
    respuesta = true;
    acumuladorPrecioEEUU=0;
    productosEEUU=0;
    precioProductoConImpuestoChina=0;
    productosChina=0;
    banderaProductoMasCaro=true;
    cantidadProductosChEeuu=0;
    totalUSD=0;

    while (respuesta == true) {
        nombreProducto = prompt("Ingrese el nombre del producto");

        precio = prompt("Ingrese el precio en USD");
		precio = parseFloat(precio);
		while(precio < 0){
			precio = prompt("ERROR/Reingrese el precio en USD)");
			precio = parseFloat(precio);
        }

        origen = prompt("ingrese origen del producto: eeuu, china, españa)");
		while (origen != "eeuu" && origen != "china" && origen != "españa") {
			origen = prompt("Error,vuelva a ingresar el origen del producto: eeuu, china, españa");
        }

        switch (origen) {
            case "eeuu":
                acumuladorPrecioEEUU += precio;
                productosEEUU++;
                break;
            
            case "china":
                precioProductoConImpuestoChina *= 1.05;
                productosChina++;
                break;
        
            default:
                if (precio > precioProductoMasCaro || banderaProductoMasCaro == true) {
                    precioProductoMasCaro = precio;
                    nombreProductoMasCaro = nombreProducto;
                    banderaProductoMasCaro = false;
                }
                break;
        }

        if ( origen == "china" || origen == "eeuu"){
            if (precio > 5 && precio < 15) {
                cantidadProductosChEeuu++;
            }
        }
 
       totalUSD += precio;

        respuesta = confirm("DESEAS INGRESAR OTRA COMPRA?");
    }//Fin del while

    //A) 
    if(totalUSD>50){
            totalImpuestosImportacion = totalUSD * 0.5;
    }
    totalImpuestoPais = (totalUSD+ totalImpuestosImportacion) * 0.35;

    totalAPagar = ( totalUSD + totalImpuestoPais +  totalImpuestosImportacion) * 205;

    document.write("A) El total a pagar en pesos es: " + totalAPagar + "<br>");

    //Si el importe final de todos los productos comprados supera los 50 usd tendrá que pagar un 50% de impuestos por la importación de los mismos.


    //B) 
    totalAPagarEEUU = ( acumuladorPrecioEEUU * 205);
    document.write("B) El total a pagar, pero solo de productos provenientes de EEUU es: " + totalAPagarEEUU + "<br>");

    //C) 
    document.write("C) El nombre del producto mas caro, de origen Español es: " + nombreProductoMasCaro+ "<br>");

    //D) 
    document.write("D) La cantidad de productos cuyo precio este entre USD 5 y USD 15 es:" + cantidadProductosChEeuu +"<br>");

}