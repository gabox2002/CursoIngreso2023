/*Ejercicio 1:

Apellido: Quispe
Nombre: Gabriel
Comisión: Div D
Tutor: Juan Furega

"Un grupo de jugadores del muy conocido juego League Of Legends apodados ""la banda de Gio"", registran de sus partidas distintos parametros.
Para eso vamos a necesitar un programa que pida a cada uno de los jugadores:
Nombre
Campeón/ personaje recurrente (Riven, Jinx, Jax, Darius)
Cantidad de partidas ganadas (No debe ser negativo)
Cantidad de partidas perdidas (No debe ser negativo)
Queremos informar:
A) Porcentaje de victorias del personaje Jinx, sobre el total de partidas ganadas.
B) El nombre del jugador con mas derrotas.
C) Cuantos jugadores ganaron mas de 5 partidas y perdieron menos de 3 (en un mismo ingreso) jugando con Darius o Riven


*/
function mostrar() {
    var respuesta;
    var nombreIngresado;
    var campeonPersonaje;
    var partidasGanadas;
    var partidasPerdidas;
    var totalPartidasGanadas;
    var totalPartidasGanadasJinx;
    var maximasDerrotas;
    var banderaDerrotas;
    var jugadoresDariusOrRiver;
    var jugadorMasDerrotas;
    var porcentajeVictoriasJinx;
    var jugadoresDariusOrRiver;



    respuesta = true;
    totalPartidasGanadas = 0;
    totalPartidasGanadasJinx=0;
    banderaDerrotas=true;
    jugadoresDariusOrRiver=0;
    

    while (respuesta == true) {
        nombreIngresado = prompt("Ingrese el nombre del jugador");

        campeonPersonaje = prompt("Ingrese el personaje recurrente: riven, jinx, jax, darius");
        while (campeonPersonaje != "riven" && campeonPersonaje != "jinx" && campeonPersonaje != "jax" && campeonPersonaje != "darius") {
            campeonPersonaje = prompt("Error! Reingrese el personaje recurrente: riven, jinx, jax, darius");
        }

        partidasGanadas = prompt("Ingrese cantidad de partidas ganadas: ")
        partidasGanadas = parseInt(partidasGanadas);
        while (partidasGanadas < 0) {//No debe ser cero
            partidasGanadas = prompt("Reingrese cantidad de partidas ganadas. (No ingresar numeros negativos)");
            partidasGanadas = parseInt(partidasGanadas);
        }
        partidasPerdidas = prompt("Ingrese cantidad de partidas perdidas: ")
        partidasPerdidas = parseInt(partidasPerdidas);
        while (partidasPerdidas < 0) {//No debe ser cero
            partidasPerdidas = prompt("Reingrese cantidad de partidas perdidas. (No ingresar numeros negativos)");
            partidasPerdidas = parseInt(partidasPerdidas);
        }

        if (partidasPerdidas > maximasDerrotas || banderaDerrotas == true) {
            maximasDerrotas = partidasPerdidas;
            jugadorMasDerrotas = nombreIngresado;
            banderaDerrotas=false;
        }
         
        if(campeonPersonaje== "jinx"){
            totalPartidasGanadasJinx += partidasGanadas;
        }

        if (campeonPersonaje == "darius" || campeonPersonaje == "riven" && partidasGanadas >5 && partidasPerdidas<3 ){
            jugadoresDariusOrRiver++;
        }

        totalPartidasGanadas += partidasGanadas;

        respuesta = confirm("DESEAS INGRESAR OTRO DATO?");
    }//Fin del while


    //A) Porcentaje de victorias del personaje Jinx, sobre el total de partidas ganadas.

    if(totalPartidasGanadas<0){
        porcentajeVictoriasJinx = totalPartidasGanadasJinx * 100 / totalPartidasGanadas;
    document.write("A) El porcentaje de victorias del personaje Jinx, sobre el total de partidas ganadas es:  " + porcentajeVictoriasJinx + "<br>");
    }
    else{
        document.write("A) El porcentaje de victorias del personaje Jinx, sobre el total de partidas n se pudo calcular" + "<br>");

    }
    
    //B) 
    document.write("B) El nombre del jugador con mas derrotas es " + jugadorMasDerrotas + "<br>");


    //C) Cuantos jugadores ganaron mas de 5 partidas y perdieron menos de 3 (en un mismo ingreso) jugando con Darius o Riven

    document.write("C) " + jugadoresDariusOrRiver + "jugadores ganaron mas de 5 partidas y perdieron menos de 3 (en un mismo ingreso) jugando con Darius o Riven" + "<br>");

}