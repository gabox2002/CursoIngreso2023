/*Ejercicio 2:

Apellido: Quispe
Nombre: Gabriel
Comisión: Div D
Tutor: Juan Furega

"Es la gala de eliminación en Gran Hermano y la producción nos pide un programa para contar los votos de los televidentes y saber cuál será el participante que deberá abandonar la casa más famosa del mundo.
Los participantes en la placa son: La Tora, Romina, Julieta y Camila. Nacho no fue nominado y Marcos no está en la placa esta semana por haber ganado la inmunidad.
El televidente debe ingresar:
Nombre del votante
Edad del votante (debe ser mayor a 13)
Género del votante (masculino, femenino, otro)
El nombre del participante a quien le dará el voto negativo (Debe estar en placa)
No se sabe cuántos votos entrarán durante la gala.


Se debe informar al usuario:
A) El promedio de edad de las votantes de género femenino
B) Cantidad de personas de género masculino entre 25 y 40 años que votaron a Nacho o Julieta.
C) Nombre del votante más joven qué voto a La Tora.
D) Nombre de cada participante y porcentaje de los votos qué recibió.
E) El nombre del participante que debe dejar la casa (El que tiene más votos)
¡No decepciones a Santiago Del Moro!

*/
function mostrar() {
    var respuesta;
    var nombreVotante;
    var edadIngresada;
    var generoIngresado;
    var nombreParticipanteVotoNegativo;
    var votosLatora;
    var votosRomina;
    var votosJulieta;
    var votosCamila;
    var edadMinVotoTora;
    var nombreVotanteEdadMinTora;
    var banderaEdadMinVotoTora;
    var nombreParticipanteVotoNegativo;
    var acumuladorEdadFemenino;
    var votosTotalesFemeninos;
    var votosTotalesMaculinos;
    var votosTotalesOtro;
    var votosTotalGeneral;
    var votosMasculinoEntre25y40;
    var nombreMasVotada;
    var promedioEdadVotoFem;
    var porcentajeVotosCamila;
    var porcentajeVotosJulieta;
    var porcentajeVotosNulo;
    var porcentajeVotosTora;
    var porcentajeVotosRomina;


    respuesta = true;
    banderaEdadMinVotoTora=true;
    acumuladorEdadFemenino=0;
    votosTotalesFemeninos=0;
    votosTotalesMaculinos=0;
    votosTotalesOtro=0;
    votosTotalGeneral=0;
    votosMasculinoEntre25y40=0;
    votosLatora=0;
    votosRomina=0;
    votosJulieta=0;
    votosCamila=0;


    while (respuesta == true) {
        nombreVotante = prompt("Ingrese su nombre");

        edadIngresada = prompt("Ingrese edad del votante");
        edadIngresada = parseInt(edadIngresada);
        while (edadIngresada < 13) {//Mayor que 13
            edadIngresada = prompt("Reingrese edad del votante (Tiene que ser mayor a 13)");
            edadIngresada = parseInt(edadIngresada);
        }

        generoIngresado = prompt("Ingrese su genero: masculino, femenino, otro");
        while(generoIngresado != "masculino" && generoIngresado != "femenino" && generoIngresado != "otro"){
            generoIngresado = prompt("Reingrese su genero: masculino, femenino, otro");
        }
        
        nombreParticipanteVotoNegativo = prompt("Ingrese el nombre del participante a quien le dará el voto negativo: latora - romina- julieta - camila");
        while (nombreParticipanteVotoNegativo != "latora" && nombreParticipanteVotoNegativo != "romina" && nombreParticipanteVotoNegativo != "julieta" && nombreParticipanteVotoNegativo != "camila") {
            nombreParticipanteVotoNegativo = prompt("Error, Reingrese otro particpante que este en placa: tora - romina- julieta - camila.");
            }
   
        if (generoIngresado == "femenino") {
            acumuladorEdadFemenino += edadIngresada;
            votosTotalesFemeninos++;
        }
        else {
            if (generoIngresado == "masculino") {//B) Cantidad de personas de género masculino entre 25 y 40 años que votaron a Nacho o Julieta. 
                votosTotalesMaculinos++;
                
                if (edadIngresada > 25 && edadIngresada < 40) {
                    if (nombreParticipanteVotoNegativo == "nacho" || nombreParticipanteVotoNegativo == "julieta"){
                    votosMasculinoEntre25y40++;
                    }
                }
            }
            else {
                votosTotalesOtro++;
            }
        }
        
        switch (nombreParticipanteVotoNegativo) {
            case "latora":
                votosLatora++;    //C) Nombre del votante más joven qué voto a La Tora.
                if (edadIngresada < edadMinVotoTora || banderaEdadMinVotoTora == true) {
                    edadMinVotoTora = edadIngresada;
                    nombreVotanteEdadMinTora = nombreVotante;
                    banderaEdadMinVotoTora = false;
                }
                break;

            case "romina":
                votosRomina++;
                break;

            case "julieta":
                votosJulieta++;
                break;

            default:
                votosCamila++;
                break;
        }
        votosTotalGeneral++;

        respuesta = confirm("DESEAS INGRESAR OTRO VOTO?");
    }//Fin del while


    //A) 
    votosTotalesFemeninos = votosTotalGeneral - (votosTotalesMaculinos + votosTotalesOtro);

    if (votosTotalesFemeninos > 0) {
        promedioEdadVotoFem = acumuladorEdadFemenino / votosTotalesFemeninos;
        document.write("A) El promedio de edad de las votantes de género femenino es: " + promedioEdadVotoFem + "<br>");
    } else {
        document.write("A) El promedio de edad de las votantes de género femenino no se puede calcular" + "<br>");
    }

    //B) 
    document.write("B) La cantidad de personas de género masculino entre 25 y 40 años que votaron a Nacho o Julieta fueron: " + votosMasculinoEntre25y40 + "<br>");

    //C) Nombre del votante más joven qué voto a La Tora.
    document.write("C) El nombre del votante más joven qué voto a La Tora es: " + nombreVotanteEdadMinTora + "<br>");

    //D) Nombre de cada participante y porcentaje de los votos qué recibió.
    
    porcentajeVotosTora = (votosLatora * 100) / votosTotalGeneral;
    porcentajeVotosRomina = (votosRomina * 100) / votosTotalGeneral;
    porcentajeVotosJulieta = (votosJulieta * 100) / votosTotalGeneral;
    porcentajeVotosCamila = (votosCamila * 100) / votosTotalGeneral;
    porcentajeVotosNulo = (votosNulos * 100) / votosTotalGeneral;

    document.write("D) El porcentaje de los votos recibido por cada participantes son: Latora " + porcentajeVotosTora + "%. Romina " + porcentajeVotosRomina + "%. Julieta " + porcentajeVotosJulieta + "%. Camila " + porcentajeVotosCamila + "%. Y el voto nulo fue " + porcentajeVotosNulo + "%."+ "<br>");


    //E) El nombre del participante que debe dejar la casa (El que tiene más votos)
    if (votosLatora > votosRomina && votosLatora > votosJulieta && votosLatora > votosCamila && votosLatora > votosNulos) {
        nombreMasVotada = "Latora";
        document.write("E) El nombre del participante que debe dejar la casa es: " + nombreMasVotada + "<br>");
    }
    else {
        if (votosRomina > votosJulieta && votosRomina > votosCamila && votosRomina > votosNulos) {
            nombreMasVotada = "Romina";
            document.write("E) El nombre del participante que debe dejar la casa es: " + nombreMasVotada + "<br>");
        }
        else {
            if (votosJulieta > votosCamila && votosJulieta > votosNulos) {
                nombreMasVotada = "Julieta";
                document.write("E) El nombre del participante que debe dejar la casa es: " + nombreMasVotada + "<br>");
            }
            else {
                if (votosCamila > votosNulos) {
                    nombreMasVotada = "Camila"
                    document.write("E) El nombre del participante que debe dejar la casa es: " + nombreMasVotada + "<br>");
                }
            }
        }
    }


}