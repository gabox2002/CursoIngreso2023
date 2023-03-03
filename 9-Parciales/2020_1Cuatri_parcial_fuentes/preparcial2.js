/*
Ejercicio 2

Una casa de computación debe realizar el ingreso de los datos de los productos que tiene a la venta, de acuerdo al 
siguiente detalle:
PC (“DESKTOP” o “LAPTOP”)
Marca (“DELL”, “HP”, “ACER”)
Modelo
Precio (No puede ser menor a 100.000 pesos)
Informar:
a) El precio de la PC más barata.
b) La cantidad total de PC marca HP del tipo DESKTOP.
c) El promedio del precio de las PC marca ACER.
d) Porcentaje de computadoras de cada marca.
e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara.
Pedir datos por prompt y mostrar la información por document.write.
*/
function mostrar()
{
var pcIngresada;
var marcaIngresada;
var modeloIngresado;
var precioIngresado; 
var precioPCMasBarata;//a
var marcaPCMasBarata;
var flag;
var cantidadPCMarcaHPDesktop;//b
var contadorPCMarcaAcer;//c
var sumaPrecioPCMarcaAcer;
var promedioPrecioPCAcer;
var contadorPCMarcaDell;//d
var contadorPCMarcaHp;
var contadorPCTotal;
var porcentajePcDell;
var porcentajePcHp;
var porcentajePcAcer;
var precioPCMasCara;//e
var flagMasCara;
var modeloPCMarcaDellMasCara;
var contadorPCMarcaHpDesktop;

respuesta= true;
precioPCMasBarata = 0;
flagMasBarata = true;
cantidadPCMarcaHPDesktop = 0;
sumaPrecioPCMarcaAcer = 0;
contadorPCMarcaAcer = 0;//d
contadorPCMarcaDell = 0;
contadorPCMarcaHp = 0;
contadorPCMarcaHpDesktop = 0;
contadorPCTotal = 0;
flagMasCara = true;
precioPCMasCara = 0;

do{
    pcIngresada = prompt("Ingrese el tipo de PC: DESKTOP o LAPTOP").toLowerCase();

    while(pcIngresada != "desktop" && pcIngresada != "laptop"){
        pcIngresada = prompt("Reingrese el tipo de PC: DESKTOP o LAPTOP").toLowerCase();
    }
    
    marcaIngresada = prompt("Ingrese la marca de PC: DELL, HP, ACER").toLowerCase();
    while(marcaIngresada != "dell" && marcaIngresada != "hp" && marcaIngresada != "acer"){
        marcaIngresada = prompt("Reingrese la marca de PC: DELL, HP, ACER").toLowerCase();
    }

    modeloIngresado = prompt("Ingrese el modelo de la PC").toLowerCase();
       
    precioIngresado = prompt("Ingrese el precio del producto");
    precioIngresado = parseFloat(precioIngresado);
    while(precioIngresado < 100000){
        precioIngresado = prompt("el precio del producto tiene que ser mayor a 100000");
        precioIngresado = parseFloat(precioIngresado);
    }

    //calculos
    //a) El precio de la PC más barata.
    if(precioIngresado > precioPCMasBarata || flagMasBarata == true){
        precioPCMasBarata = precioIngresado;
        marcaPCMasBarata = marcaIngresada;
        flagMasBarata = false;
    }
    
    //caso usando switch por marca
    switch(marcaIngresada){
        case "hp":
            contadorPCMarcaHp++
            if(pc == "desktop"){    //b) La cantidad total de PC marca HP del tipo DESKTOP.
                cantidadPCMarcaHPDesktop++;    //d contador para sacar porcentaje
            }
        case "dell":
            contadorPCMarcaDell++;    
            if(pc == "desktop"){//e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara.
                if(precioIngresado>precioPCMasCara || flagMasCara == true){
                    precioPCMasCara = precioIngresado;
                    modeloPCMarcaDellMasCara = modeloIngresado;
                    flagMasCara = false;
                }
            }
            break;
        default:
            contadorPCMarcaAcer++;    //d contador para sacar porcentaje
            sumaPrecioPCMarcaAcer += precioIngresado;//c) El promedio del precio de las PC marca ACER.
            break;
    }
    
    respuesta = confirm("Quieres cargar otra PC?");

}while(respuesta == true);

    if(contadorPCMarcaAcer > 0){ //c) El promedio del precio de las PC marca ACER.
            promedioPrecioPCAcer = sumaPrecioPCMarcaAcer / contadorPCMarcaAcer;
            document.write("El promedio del precio de las PC marca ACER es " + promedioPrecioPCAcer +"<br>");
    }
    else{
        document.write("El promedio del precio de las PC marca ACER no se pudo calcular" +"<br>");
    }

    //d) Porcentaje de computadoras de cada marca. (primero contador luego promedio)
    contadorPCTotal = contadorPCMarcaAcer + contadorPCMarcaDell + contadorPCMarcaHp;
    
    if(contadorPCTotal>0){
        porcentajePcDell = (contadorPCMarcaDell*100) / contadorPCTotal;
        porcentajePcDell = porcentajePcDell.toFixed(2);

        porcentajePcHp = (contadorPCMarcaHp*100) / contadorPCTotal;
        porcentajePcHp = porcentajePcHp.toFixed(2);

        porcentajePcAcer = (contadorPCMarcaAcer*100) / contadorPCTotal;
        porcentajePcAcer = porcentajePcAcer.toFixed(2); 
    document.write("El porcentaje de computadoras de cada marca es: " + "Dell es: " + porcentajePcDell + ", Hp es:" + porcentajePcHp + "y de Acer es: " + porcentajePcAcer + "<br>");
    }
    else{
        document.write("El porcentaje de computadoras de cada marca no se pudo calcular");
    }
    

document.write(marcaPCMasBarata + " es la PC más barata con el precio de: "+ precioPCMasBarata + "<br>");
document.write("La cantidad total de PC marca HP del tipo DESKTOP es: "+ cantidadPCMarcaHPDesktop + "<br>");
document.write("De las computadoras DESKTOP de marca DELL, el modelo de la mas cara es" + modeloPCMarcaDellMasCara);

}
