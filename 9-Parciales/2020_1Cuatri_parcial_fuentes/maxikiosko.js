/* Un maxikiosko solicita la creacion de una aplicacion simple para ir contrlnado la mercaderia vendida durante el transcurso del día laboral.
Se ingresaran un ttal de 10ventas, incluyend una serie de datos:

Nombre de producto,
Tipo de producto ("golosina","bebida","cigarillos"),
Precio unitario del producto ( desde 1 hasta 1000),
Cantidad de unidafrs por venta (entre 1 y 10).

Se deberá calcular e informar:
a) El total bruto recaudado con las 10ventas;
b) El promedio de unidades por compra de golosinas (en caso de no realizar ninguna venta de golosina, informarlo).
c) De los cigarrillos más caros, el nombre y su precio unitario.
d) de las 10 ventas, que porcentaje de ventas le pertenece a las bebidas.*/

function mostrar()
{
     var contador;	
     var nombreProducto;
     var precioProducto;
     var tipoProducto;
     var cantidadUnidad;
     var totalBruto; //cantidad * precio
     var totalAcumulado;
     var contadorVentasGolosinas;
     var acumuladorVentaGolosinas;
     var promedioGolosinas;
     var precioCigarilloMasCaro;
     var nombreCigarilloMasCaro;
     var banderaDelPrimerCigarillo;
     var porcentajeBebidas;
     var contadorBebidas;
     
     
     contadorBebidas = 0;
     banderaDelPrimerCigarillo = "true"
     contadorVentasGolosinas = 0;
     acumuladorVentaGolosinas = 0;
     totalAcumulado = 0;
     contador = 0;
    
     while(contador <10)
     {
     nombreProducto = prompt("ingrese el producto:");
     
     tipoProducto = prompt("ingrese tipo de producto: golosinas/bebidas/cigarillos");
     while(tipoProducto !="golosinas" && tipoProducto !="bebidas" && tipoProducto !="cigarillos")
    {
     tipoProducto =prompt("Error,vuelva a ingresar el producto");	
    }
    precioProducto = prompt("ingrese precio")
    precioProducto = parseFloat(precioProducto)
    while(precioProducto <1 || precioProducto >1000)
     {
        precioProducto = prompt("Error ingrese un precio valido")	
        precioProducto = parseFloat(precioProducto)
     }	
     cantidadUnidad = prompt("ingrese cantidad de unidades");
     cantidadUnidad = parseInt(cantidadUnidad);	
     while(cantidadUnidad <1 || cantidadUnidad >10)
    {
     cantidadUnidad = prompt("ingrese unidades validas");
     cantidadUnidad = parseInt(cantidadUnidad);
    }
    totalBruto = cantidadUnidad * precioProducto;
    totalAcumulado = totalAcumulado + totalBruto; // otra forma totalAcumulado += totalBruto;
    
    
        switch(tipoProducto)
    {
      case "golosinas":
      break;	
      contadorVentasGolosinas++;
      acumuladorVentaGolosinas += cantidadUnidad;
    
      break;
      case "cigarillos":
      if(precioProducto > precioCigarilloMasCaro || banderaDelPrimerCigarillo== true)//Maximo cigarillos
      {
        precioCigarilloMasCaro = precioProducto;
        nombreCigarilloMasCaro = nombreProducto;
        banderaDelPrimerCigarillo = false;
      }
      break;
      case "bebidas":
      contadorBebidas++;
      break;
    
    }
    contador++;
    }
    
    
    
    porcentajeBebidas = (contadorBebidas * 100) / contador;
    
    if (contadorVentasGolosinas > 0) // promedio de ventas de golosinas
    {
    promedioGolosinas = acumuladorVentaGolosinas / contadorVentasGolosinas;
    }
    else
    {
     promedioGolosinas = "No se ingresaron golosinas"
    }
    
    if(banderaDelPrimerCigarillo == false)
    {
        document.write("el nomhbre del cigarillo mas caroe es: " + nombreCigarilloMasCar + 
        "y cuesta: " + precioCigarilloMasCaro + "<br>");
    }
    else
    {
    precioCigarilloMasCaro = "no se puso xd"
    }
    
     document.write("El total Bruto Recadudado es: " + totalAcumulado + "<br>");
     document.write("el promedio de golosinas es: "+ promedioGolosinas + "<br>");
     document.write("el nomhbre del cigarillo mas caroe es: " + nombreCigarilloMasCar + 
                             "y cuesta: " + precioCigarilloMasCaro + "<br>");
    document.write("el porcentaje de bebidas es :" + porcentajeBebidas + "%<br>");
    
}
