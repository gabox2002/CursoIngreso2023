/*Gabriel Quispe DIV D grupo 3 Ejercicio Integrador clase 07
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
function CalcularPrecio () 
 {
    var cantidad = txtIdCantidad.value;  
    var marca = Marca.value;
    const precio = 35;
    var precioConDescuento;
    var precioBruto;
    var precioFinal;
    
    cantidad = parseInt(cantidad);        
    precioBruto = cantidad * precio;
    
    switch(cantidad)
    {
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    precioConDescuento = precioBruto - (precioBruto * 0.4);
                    break;
                default:
                    precioConDescuento = precioBruto - (precioBruto * 0.3);
                    break;
            }
            break; 
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    precioConDescuento = precioBruto - (precioBruto * 0.25);
                    break;
                default:
                    precioConDescuento = precioBruto - (precioBruto * 0.2);
                    break;
            }
            break;
        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    precioConDescuento = precioBruto - (precioBruto * 0.15);
                    break;
                case "FelipeLamparas":
                    precioConDescuento = precioBruto - (precioBruto * 0.10);
                    break;
                default:
                    precioConDescuento = precioBruto - (precioBruto * 0.05);
                    break;
            }
            break;
        case 2:
        case 1:
            precioConDescuento = cantidad * precio;
            break;
        default:
            precioConDescuento = precioBruto - (precioBruto * 0.5);//a
            break;
    }//Fin del Switch
   
    if(precioConDescuento > 120)
    {
        precioIIBB = precioConDescuento * 0.1;
        precioFinal = precioConDescuento + precioIIBB;

        txtIdprecioDescuento.value = precioFinal;
  
        alert("Sub-total: " + precioConDescuento + " + IBB: " + precioIIBB  + "\n" + "Total a pagar: " + precioFinal);
     }
     else
     {  
        txtIdprecioDescuento.value = precioConDescuento;
     }
 }