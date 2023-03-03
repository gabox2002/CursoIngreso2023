/******************************************************************************
Ejercicio 1

Para una peluquería se necesita un programa que permita ingresar datos de los trabajos realizados hasta
que el usuario quiera.
Por cada trabajo, se ingresa:
A. Trabajo: ("corte", "tintura", "peinado").
B. Nombre del cliente,
C. Edad del cliente (entre 8 y 100)
D. Precio base (1000).

Informar:
1. Si el cliente tiene menos de 12 años, tendrá un descuento del 20% sobre el precio base.
2. Si el trabajo a realizarse es “corte”, tendrá un incremento del 20% sobre el precio base, si es “tintura”
50%.
precio base -20% = X?????
precio base +50% = B
X + 50% =?
3. El nombre del cliente que mas gasto.
4. El trabajo realizado al cliente con menor edad.
5. El importe total facturado
6. El porcentaje de tirabajos realzados Ej: ["corte": 30%, "tintura": 40%, "peinado": 30%]

Pedir datos por prompt y mostrar por document write o alert.

*******************************************************************************/
function mostrar()
{
	let trabajo;
	let nombreDelCliente;
	let edadDelCliente; //entre 8 y 100
	let precioBase;
	let pregunta;
	let descuento;
	let incremento;
	let contadorTrabajos;
	let acumuladorCliMasGasto;
	let acumuladorCliMasJoven;
	let precioFinal;
	let maxPrecio;
	let nombreMaxPrecio;
	let flagMax = 0;
	let edadDelClienteJoven;
	let edadMinimaTrabajo;
	let totalDeTrabajos;
	
	
	precioBase = 1000;
	descuento = 0;
	incremento = 0;
	contadorTrabajos = 0;
	acumuladorTrabajos = 0;
	acumuladorCliMasGasto = 0;
	acumuladorCliMasJoven = 0;

	contadorTin=0;
	contadorPeinado=0;
	contadorCorte=0;
	flag = "se modifico el precio";
	do
	{
		trabajo = prompt("Cual es su trabajo a realizar? 'corte', 'tintura', 'peinado'.");
		while (trabajo != "corte" && trabajo != "tintura" && trabajo != "peinado")
		{
			trabajo = prompt("reingrese !! 'corte', 'tintura', 'peinado'.");
		}
		nombreDelCliente = prompt ("Cual es el nombre del cliente?");
		edadDelCliente = prompt ("Cual es su edad?");
		edadDelCliente = parseInt(edadDelCliente);
		while(edadDelCliente <= 8 || edadDelCliente >= 100)
		{
			edadDelCliente = prompt ("Cual es su edad?");
			edadDelCliente = parseInt(edadDelCliente);
		}
				
		if (edadDelCliente < 12)
		{
			descuento =20;
		}
		
		switch(trabajo)
		{


			case "corte":
				incremento = 20;
				contadorCorte ++;
			break;
			case "tintura":
				incremento = 50;
				contadorTin ++;
			break;
			case "peinado":
				incremento = 0;
				contadorPeinado ++;
			break;
			default:
				alert("no es valido, ingrese corte, tintura, o peinado")
			break;
			
		}
		descuento = precioBase * descuento / 100;
		
		incremento = precioBase * incremento / 100;
		
		precioFinal = precioBase - descuento + incremento;
		
		if(precioFinal > maxPrecio || flagMax ==0)
		{
			
			maxPrecio = precioFinal;
			nombreMaxPrecio =nombreDelCliente;
			
		}
		if(edadDelCliente < edadDelClienteJoven || flagMax == 0)
		{
			flagMax =1235;
			edadDelClienteJoven = edadDelCliente;
			edadMinimaTrabajo = trabajo;
			
		}
		
		
		
		
	}
	while(confirm("desea continuar?"))
	
	totalDeTrabajos = contadorTin + contadorPeinado + contadorCorte;
	porcentajeTin = contadorTin / (totalDeTrabajos * 100);
	porcentajePeinado = contadorPeinado / (totalDeTrabajos * 100);
	porcentajeCorte = contadorCorte / (totalDeTrabajos * 100);

	alert ("<")



}

