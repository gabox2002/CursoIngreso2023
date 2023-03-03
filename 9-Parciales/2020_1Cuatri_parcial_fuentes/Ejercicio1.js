/*
Ejercicio 1
   La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
   jugadores que la integran.
   Para ellos se pide realizar una app.
   
   Se debe ingresar por cada jugador
   
   -Nombre del jugador
   -Nacionalidad
   -Posición (Arquero, Defensor, Mediocampista o Delantero)
   -Cantidad de Tarjetas Rojas recibidas
   -Goles 
   
   Se necesita saber
   
   a)El goleador del torneo
   b)El jugador Argentino con menos rojas recibidas.
   c)El porcentaje de jugadores Ingleses de la liga
   
   NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.*/

function mostrar()
{
var nombreIngresado;
var nacionalidadIngresada;
var posicionIngresado;
var cantidadRojasRecibidas;
var golesIngresados;
var banderaGoleador;
var maxGoleador;
var nombreMaxGoleador;
var minTarjetasRojasRecibidas;
var contadorIngleses;
var contadorJugadores;
var porcentajeIngleses;


respuesta = true;
banderaGoleador = true;
banderaMenosrojas = true;
contadorIngleses = 0;
contadorJugadores = 0;

while(respuesta == true){
    nombreIngresado = prompt("Ingrese nombre del jugador");

    nacionalidadIngresada = prompt("Ingrese la nacionalidad, por ejemplo: Argentino, Ingles...");

    posicionIngresado = prompt("Ingrese posicion; arquero, defensor, mediocampista o delantero");
    while(posicionIngresado != "arquero" && posicionIngresado != "defensor" && posicionIngresado != "mediocampista" && posicionIngresado != "delantero"){
        posicionIngresado = prompt("Reingrese la posicion que juega; arquero, defensor, mediocampista o delantero");
    }

    cantidadRojasRecibidas = prompt("Ingrese cantidad de tarjetas rojas del jugador");
    cantidadRojasRecibidas = parseInt(cantidadRojasRecibidas);
    while(cantidadRojasRecibidas<0){
        cantidadRojasRecibidas = prompt("Reingrese cantidad de tarjetas rojas del jugador");
        cantidadRojasRecibidas = parseInt(cantidadRojasRecibidas);
    }

    golesIngresados = prompt("Ingrese los goles anotados por el jugador");
    golesIngresados = parseInt(golesIngresados);
    while(golesIngresados<0){
        golesIngresados = prompt("Reingrese los goles anotados por el jugador");
        golesIngresados = parseInt(golesIngresados);
    }

    //   a)El goleador del torneo
    if(golesIngresados > maxGoleador || banderaGoleador== true)//Maximo goleador
    {
      maxGoleador = golesIngresados;
      nombreMaxGoleador = nombreIngresado;
      banderaGoleador = false;
    }

    switch(nacionalidadIngresada){
        case "Argentino":    //b)El jugador Argentino con menos rojas recibidas.
            if(cantidadRojasRecibidas < minTarjetasRojasRecibidas || banderaMenosrojas == true){
                minTarjetasRojasRecibidas = cantidadRojasRecibidas;
                nombreMenosTarjetas = nombreIngresado;
                banderaMenosrojas = false;
            }
            break;
        case "Ingles":   //c)El porcentaje de jugadores Ingleses de la liga
            contadorIngleses++;

            break;
    }
    
    contadorJugadores++;

    respuesta = confirm("Desea ingresar otro jugador?");

}//Fin del while

//c)El porcentaje de jugadores Ingleses de la liga
porcentajeIngleses = (contadorIngleses * 100) / contadorJugadores;


document.write("El maximo goleador es: " + nombreMaxGoleador + "<br>");
document.write("El jugador Argentino con menos tarjetas rojas es: " + nombreMenosTarjetas + " con " + minTarjetasRojasRecibidas + " tarjetas rojas recibidas. <br>");
document.write("El porcentaje de jugadores Ingleses de la liga es: " + porcentajeIngleses.toFixed(2) + "<br>");


}