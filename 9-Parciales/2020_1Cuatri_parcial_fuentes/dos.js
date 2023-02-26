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
    
    respuesta = true;

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
       
        respuesta = confirm("Desea continuar?");

    }
        if(cantidadBolsas > 10){
            importeTotal = cantidadBolsas * precioBolsas;
            descuentoMasDeDiez = importeTotal - (importeTotal * 0.15);
        }
        else{
            if(cantidadBolsas > 30){
                importeTotal = cantidadBolsas * precioBolsas;
                descuentoMasDeTreinta = importeTotal - (importeTotal * 0.25);
            }
        }


}
