/*
Ejercicio 3

Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario llevar un registro 
de la venta diaria de cafés, medialunas y churros.

Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente
Tipo de producto (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.

Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros o un café tendrá un 5% de descuento.

Informes:

a) Cuantas Medialunas se compraron durante toda la jornada.
b) Cuál fue el tipo de producto con más unidades vendidas.
c) De la venta con más unidades el nombre del cliente y el tipo de producto.
d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.

Tener en cuenta:
Si se compran más de dos docenas de medialunas/churros por ejemplo. El descuento del 30% se sigue aplicando, eso aplica para cualquier otro caso similar.
Por cada venta que se hace se ingresa un sólo tipo de producto (café o medialunas o churros)

*/
function mostrar()
{
    var nombre;
    var tipoProducto;
    var cantidad;
    var importeTotal;
    var descuento24;
    var descuento12;
    var descuento10;
    var descuento5;
    var precioMedialunas;
    var precioChurros;
    var precioCafe;
    var contadorMedialunas;
    var acumuladorMedialunas;
    var acumuladorPrecioMedialunas;
    var importeDescuento;
    var impuesto;
    var productoMasVendido;
    var cantidadProductoMasVendido;
    var nombreClienteQueMasVendio;
    var productoClienteQueMasVendio;
    var cantidadClienteQueMasVendio;
    var banderaDelPrimero;
    var banderaDelPrimeroCliente;
    var respuesta;

    precioMedialunas = 60;
    precioChurros = 50;
    precioCafe = 100;

    descuento24 = 0.70;
    descuento12 = 0.80;
    descuento10 = 0.90;
    descuento5 = 0.95;

    contadorMedialunas = 0;
    acumuladorMedialunas = 0;
    acumuladorPrecioMedialunas = 0;
    importeDescuento = 0;
    importeTotal = 0;

    respuesta = true;
    banderaDelPrimero = true;
    banderaDelPrimeroCliente = true;

    while(respuesta == true)
    {
        nombre = prompt("Ingrese su nombre");
        tipoProducto = prompt("Ingrese el producto: Café, Medialunas o Churros");

        while(tipoProducto != "Café" && tipoProducto != "Medialunas" && tipoProducto != "Churros")
        {
            tipoProducto = prompt("Ingrese nuevamente el producto: Café, Medialunas o Churros");
        }

        cantidad = prompt("Ingrese la cantidad");
        cantidad = parseInt(cantidad);

        while(cantidad < 0)
        {
            cantidad = prompt("Ingrese nuevamente la cantidad");
            cantidad = parseInt(cantidad);
        }

        switch(tipoProducto)
        {
            case "Medialunas":
                if(cantidad >= 24)
                {
                    importeDescuento = cantidad * precioMedialunas * descuento24;
                }
                else
                {
                    if(cantidad >= 12)
                    {
                        importeDescuento = cantidad * precioMedialunas * descuento12;
                    }
                    else
                    {
                        if(cantidad >= 10)
                        {
                            importeDescuento = cantidad * precioMedialunas * descuento10;
                        }
                        else
                        {
                            if(cantidad >= 5)
                            {
                                importeDescuento = cantidad * precioMedialunas * descuento5;
                            }
                            else
                            {
                                importeDescuento = cantidad * precioMedialunas;
                            }
                        }
                    }
                }
                contadorMedialunas++;
                acumuladorMedialunas = acumuladorMedialunas + cantidad;
                acumuladorPrecioMedialunas = acumuladorMedialunas * cantidad;
            break;
            case "Churros":
                if(cantidad >= 24)
                {
                    importeDescuento = cantidad * precioChurros * descuento24;
                }
                else
                {
                    if(cantidad >= 12)
                    {
                        importeDescuento = cantidad * precioChurros * descuento12;
                    }
                    else
                    {
                        if(cantidad >= 10)
                        {
                            importeDescuento = cantidad * precioChurros * descuento10;
                        }
                        else
                        {
                            if(cantidad >= 5)
                            {
                                importeDescuento = cantidad * precioChurros * descuento5;
                            }
                            else
                            {
                                importeDescuento = cantidad * precioChurros;
                            }
                        }
                    }
                }
            break;
            case "Café":
                if(cantidad >= 1)
                {
                    importeDescuento = cantidad * precioCafe * descuento5;
                }
                else
                {
                    importeDescuento = cantidad * precioCafe;
                }
            break;
        }

        if(cantidad > cantidadProductoMasVendido || banderaDelPrimero == true)
        {
            productoMasVendido = tipoProducto;
            cantidadProductoMasVendido = cantidad;
            banderaDelPrimero = false;
        }
        
        if(cantidad > cantidadClienteQueMasVendio || banderaDelPrimeroCliente == true)
        {
            cantidadClienteQueMasVendio = cantidad;
            nombreClienteQueMasVendio = nombre;
            productoClienteQueMasVendio = tipoProducto;
            banderaDelPrimeroCliente = false;
        }

        if(importeDescuento > 1300)
        {
            impuesto = importeDescuento * 0.2;
            importeTotal = importeDescuento + impuesto;
        }
        else
        {
            importeTotal = importeDescuento;
        }

        respuesta = confirm("¿Desea continuar?");
    }

    document.write("A) Duante la jornada se compraron: " + acumuladorMedialunas + " medialunas" + "<br>");
    document.write("B) El tipo de producto con más unidades vendidas es: " + productoMasVendido + "<br>");
    document.write("C) El cliente que más vendió es: " + nombreClienteQueMasVendio + ", y el producto que más vendió esa persona es: " + productoClienteQueMasVendio + "<br>");
    document.write("D) El importe total es: " + importeTotal + "<br>");

}

