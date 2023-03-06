/*Ejercicio 3:

Apellido: Quispe
Nombre: Gabriel
Comisión: Div D
Tutor: Juan Furega


*/
function mostrar() {
    var respuesta;


    respuesta = true;

    while (respuesta == true) {




        /*
        edadIngresada = prompt("Ingrese edad del comprador");
		edadIngresada = parseInt(edadIngresada);
		while (edadIngresada < 18) {//Mayor que 18
			edadIngresada = prompt("Reingrese edad del comprador (Tiene que ser mayor a 18)");
			edadIngresada = parseInt(edadIngresada);
        }

        generoIngresado = prompt("Ingrese su genero: masculino, femenino, otro");
        while(generoIngresado != "masculino" && generoIngresado != "femenino" && generoIngresado != "otro"){
            generoIngresado = prompt("Error! Reingrese su estado civil: masculino, femenino, otro");
        }

        metodoDePago = prompt("ingrese el metodo de pago: efectivo - debito - credito");
		while (metodoDePago != "efectivo" && metodoDePago != "debito" && metodoDePago != "credito") {
			metodoDePago = prompt("Error! Reingresar el metodo de pago: efectivo - debito - credito");
		}

        cantidadIngresada = prompt("Ingrese cantidad de productos comprados: ")
		cantidadIngresada = parseInt(cantidadIngresada);
		while (cantidadIngresada < 1) {//No debe ser cero
			cantidadIngresada = prompt("Reingrese cantidad de productos comprados. (No ingresar numeros negativos)");
			cantidadIngresada = parseInt(cantidadIngresada);
		}
		
		pesoBultos = prompt("Ingrese el peso de los bultos (Hasta 1500 Kg)");
		pesoBultos = parseFloat(pesoBultos);
		while(pesoBultos > 1500 || pesoBultos < 0){
			pesoBultos = prompt("ERROR/Reingrese el peso de los bultos (Hasta 1500 Kg, No ingresar numeros negativos)");
			pesoBultos = parseFloat(pesoBultos);
		}
        */




        respuesta = confirm("DESEAS INGRESAR OTRO DATO?");
    }//Fin del while







    document.write("A) " + "<br>");
    document.write("B) " + "<br>");
    document.write("C) " + "<br>");
    document.write("D) " + "<br>");
    document.write("E) " + "<br>");

}