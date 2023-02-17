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


	/*do{		
		respuesta = prompt("desea continuar? " );
		if(banderaDelPrimero == 0 || numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;	
			numeroMaximo = parseInt(numeroMaximo);
		}
		if(banderaDelPrimero == 0 || numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
			numeroMinimo = parseInt(numeroMinimo);
			banderaDelPrimero = 1;
		}
	}

	*/
}//FIN DE LA FUNCIÓN