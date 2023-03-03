/* Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar() {
    var tipo;
    var respuesta;
    var cantidadBolsas;
    var precioBolsas;
    var importeTotal;
    var importeConDescuento;
    var tipoMasCaro;
    var descuentoMasDeDiez;
    var descuentoMasDeTreinta;
    var precioBolsasMasCaro
    
    respuesta = true;
    importeTotal = 0;
    importeConDescuento =0;
    cantidadBolsas = 0;
    precioBolsasMasCaro = 0;
    flag = true;

    while (respuesta == true) {
        tipo = prompt("Ingrese tipo de producto: arena, cemento o cal");
        while (tipo != "arena" && tipo != "cemento" && tipo != "cal") {
            tipo = prompt("Ingrese tipo de producto nuevamente: arena, cemento o cal");
        }

        cantidadBolsas = prompt("Ingrese cantidad de bolsas: ");
        cantidadBolsas = parseInt(cantidadBolsas);
        
        precioBolsas = prompt("Ingrese el precio por bolsas");
        precioBolsas = parseFloat(precioBolsas);
        while(precioBolsas < 1){
            precioBolsas = prompt("Ingrese el precio nuevamente");
            precioBolsas = parseFloat(precioBolsas);
        }
       
        if (precioBolsas > precioMasCaro || flag == true){//f) El tipo mas caro
            precioBolsasMasCaro = precioBolsas;
            tipoMasCaro = tipo;
            flag == false;
        }
        switch(tipo){
            case "arena": 
                contadorBolsasArena++;
                break;
            case "cemento":
                contadorBolsasCemento++;
                break;
            default:
                contadorBolsasCal++;
                break;
        }

        respuesta = confirm("Desea continuar?");

    }//fin del while
        
        importeTotal = cantidadBolsas * precioBolsas; // importe bruto
        cantidadBolsas += cantidadBolsas;

        if(cantidadBolsas > 10){//con descuento
            descuentoMasDeDiez = importeTotal - (importeTotal * 0.15);
            importeConDescuento = descuentoMasDeDiez;
            document.write("El importe total a pagar con descuento es: " + importeConDescuento);

        }
        else{
            if(cantidadBolsas > 30){
                descuentoMasDeTreinta = importeTotal - (importeTotal * 0.25);
                importeConDescuento = descuentoMasDeTreinta;
                document.write("El importe total a pagar con descuento es: " + importeConDescuento);

            }
        }
        
        if(contadorBolsasArena > contadorBolsasCal && contadorBolsasArena > contadorBolsasCemento){//d) Informar el tipo con mas cantidad de bolsas.
            document.write("El tipo con mas cantidad de bolsas es Arena");
        }
        else{
            if(contadorBolsasCal > contadorBolsasCemento){
                document.write("El tipo con mas cantidad de bolsas es Cal");
            }
            else{
                document.write("El tipo con mas cantidad de bolsas es Cemento");
            }
        }
        document.write("El importe total bruto a pagar sin descuento es: " + importeTotal);


        

}
