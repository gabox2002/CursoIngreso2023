//Gabriel Quispe DIV D grupo 3 Ejercicio Integrador clase 07
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
    
    switch(cantidad)
    {
        case 6:
            precioConDescuento = precioBruto - (precioBruto * 0.5);
        break;
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
        default:
            precioConDescuento = precioBruto * cantidad;
        break;
        }
    
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
         
    if(precioConDescuento > 120)
    {
        precioIIBB = precioConDescuento * 0.1;
        precioFinal = precioConDescuento + precioIIBB;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
  
        alert("Sub-total: " + precioConDescuento + "\n" + "Usted pagó " + precioIIBB + " de Ingresos Brutos" + "\n" + "Total a pagar: " + precioFinal + "\n");
     }
 }