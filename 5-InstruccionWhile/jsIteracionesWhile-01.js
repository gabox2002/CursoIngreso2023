/* Gabriel Quispe DIV D grupo 3 While 01
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var numeroAscendente;
	numeroAscendente = 0;

	while(numeroAscendente < 10)
	{
		console.log("El número es " + (numeroAscendente + 1)); //lee el valor y sumarle 1, no modifica la variable
		numeroAscendente++; //escritura sobre la variable modifica la variable asecendente
	}
}
/*
		numeroAscendente =numeroAscendente + 1;
		numeroAscendente += 1;
		
		alert("El número es " + numeroAscendente);
		document.write("El número es " + numeroAscendente + "<br>");*/