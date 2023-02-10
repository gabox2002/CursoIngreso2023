/* Gabriel Quispe DIV D grupo 3 Ejercicio Integrador clase 06
4.	Para el departamento de iluminación:
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
 	var cantidad;
    var marca;
    const precio = 35;
    var precioConDescuento;
    var precioBruto;

    cantidad = document.getElementById("txtIdCantidad").value;   
    cantidad = parseInt(cantidad);
    marca = document.getElementById("Marca").value;

    precioBruto = cantidad * precio;

    if(cantidad > 5)
    {
        precioConDescuento = precioBruto - (precioBruto * 0.5);
    }
    else
    {
        if(cantidad == 5)
        {
            if(marca == "ArgentinaLuz") 
            {
                precioConDescuento = precioBruto - (precioBruto * 0.4);
            }
            else
            {
                precioConDescuento = precioBruto - (precioBruto * 0.3);
            }
        }
        else
        {
            if(cantidad == 4)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    precioConDescuento = precioBruto - (precioBruto * 0.25);
                }
                else
                {
                    precioConDescuento = precioBruto - (precioBruto * 0.2);
                }
            }
            else
            {
                if(cantidad == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        precioConDescuento = precioBruto - (precioBruto * 0.15);
            
                    }
                    else
                    {
                        if (marca == "FelipeLamparas")
                        {
                            precioConDescuento = precioBruto - (precioBruto * 0.1);
                        }
                        else
                        {
                            precioConDescuento = precioBruto - (precioBruto * 0.05);
                        }
                    }
                }
            }
        }
    }
    
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
        
    if(precioConDescuento > 120)
    {
        precioIIBB = precioConDescuento * 0.1;
        precioFinal = precioConDescuento + precioIIBB;

        document.getElementById("txtIdprecioDescuento").value = precioFinal;


        alert("Usted pago " + precioIIBB + " de Ingresos Brutos");
    }
}