/*
Ejercicio 3:

Apellido:Quispe
Nombre:Gabriel
Comisión: Div d
Tutor: juan

"Atención AFIP: ""Inspección de Bultos"": La administración federal de ingresos públicos tiene el ojo puesto sobre una empresa de 
logística que opera en Argentina e importa productos desde  México, Colombia y Uruguay. Nos piden que realicemos un programa que 
permita controlar los movimientos de dicha empresa: 
De cada pedido que recibe la empresa se conoce: la cantidad de bultos, el peso por bulto (no debe superar los 1500 kilos), el lugar de origen.
Se establece que la tarifa regular por bulto es de $300 y la tarifa especial (para pedidos de más de 300 kilos por bulto) es de $500.
La aplicación debe informar a la AFIP:

A) Total facturado
B) Porcentaje de bultos ingresados desde Colombia.
C) Sobre el total facturado de bultos provenientes de México, la empresa deberá pagar un canon del 15% sobre este total 
 (este impuesto luego será redistribuido para la construcción de hospitales). Mostrar dicho valor.
D) Para incentivar el libre comercio con los países del MERCOSUR, si el total facturado de bultos provenientes de Uruguay, 
 supera los $15000000, se le otorgará a la empresa una devolución del 5% sobre ese total.


*/
function mostrar()
{
var totalfacturado =0;
var totalBultos=0;
var totalBultosColombia=0;
var totalFacturadoMexico =0;
var totalBultosMexico=0;
var totalBultosUruguay=0;
var cantidadBultos=0;
var lugarOrigen;
var porcentaje; 

respuesta =true;
while(respuesta ==true){
	totalfacturado += cantidadBultos * tarifa;
	totalBultos += cantidadBultos;

	switch(lugarOrigen)
    {
      case "Colombia":
		    totalBultosColombia += cantidadBultos;
		    break;	
    
      	
      case "Mexico":
			totalBultosMexico +=cantidadBultos;
			totalFacturadoMexico += cantidadBultos * tarifa;
      		break;
      case "Uruguay":
			totalBultosUruguay += cantidadBultos;
		    break;

		
	}

porcentajeBultosColombia = (totalBultosColombia*100) / totalBultos;

canonMexico = totalFacturadoMexico * 0.15;

devolucionUruguay = totalBultosUruguay *500*0.05;

if (totalFacturadoUruguay > 15000000){
	totalfacturado += devolucionUruguay;
}



document.write("El total facturado es " + totalfacturado+"<br>");
document.write("El total facturado es " + totalfacturado+"<br>");



}
















	


	//document.write("          es: " + totalAcumulado + "<br>");



}