/*Gabriel Quispe DIV D grupo 3 While 09
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero = false; //No se cumplio el objetivo
	var numeroIngresado;
	var numeroMaximo; //NO HAY QUE INICIAlizaRLAS
	var numeroMinimo; //NO HAY QUE INICIAlizaRLAS
	var respuesta;
	
	//iniciar variables
	respuesta="si";

	while (respuesta == "si"){
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == false){ //SINO SE CUMPLE
			//HAGO CUMPLIRLO
			numeroMaximo = numeroIngresado;	
			numeroMinimo = numeroIngresado;
			//LE CAMBIO DEL ESTADO
			banderaDelPrimero = true;
		}
		else{
			if(numeroIngresado > numeroMaximo){
				numeroMaximo = numeroIngresado;	
			}
			else{
				if(numeroIngresado < numeroMinimo){
					numeroMinimo = numeroIngresado
				}
			}
		}
		respuesta = prompt("desea continuar? si/no");
	}
	
	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}//FIN DE LA FUNCIÓN