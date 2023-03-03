/*
Ejercicio 1 con NUMERO ESPECIFICO

De los 50 participantes del torneo de TETRIS, se deben ingresar los datos de acuerdo a lo siguiente:
Nombre
Genero (“F”, “M”, "X")
Edad (validar de manera coherente)
Score (validar de manera coherente)
Informar:
a) La cantidad de participantes mayores de edad.
b) El promedio de edad de todos los participantes femeninos.
c) El nombre del participante (cualquiera sea el genero) con mejor score.
Pedir datos por prompt y mostrar la información por document.write.
*/

function mostrar()
{
var nombreIngresado;
var generoIngresado;
var edadIngresada;
var scoreIngresado;
var respuesta;
var cantidadMayoresEdad;
var contadorTotalParticipantes;
var nombreMejorScore;
var mejorScore; //max y min no se INICIALIZAN
var contadorFemenino;
var sumaEdadFemenino;
var promedioEdadFemenino;

contadorTotalParticipantes =0;
sumaEdadFemenino=0;
cantidadMayoresEdad =0;
contadorFemenino = 0;
contadorMayores =0;
respuesta = true;

do{
    nombreIngresado = (prompt("Ingrese su nombre"));
    
    do{ 
    edadIngresada = parseInt(prompt("Ingrese su edad"));
    }while(edadIngresada<0);
    //a) La cantidad de participantes mayores de edad.
    if(edadIngresada>18){
        cantidadMayoresEdad++;
    }
                 
    do{
	    generoIngresado = prompt("Ingrese correctamente F, M, X");
	}while(generoIngresado != "F" && generoIngresado != "M" && generoIngresado != "X");

    //b) El promedio de edad de todos los participantes femeninos.
    if (generoIngresado == "F"){
        sumaEdadFemenino += edadIngresada;
        contadorFemenino++;
    }

    do{    
    scoreIngresado = parseInt(prompt("Ingrese su score"));
    }while(scoreIngresado < 0 ); //mayor a cero

    //c) El nombre del participante (cualquiera sea el genero) con mejor score. MAXIMO
    if(scoreIngresado > mejorScore || contadorTotalParticipantes == 0){     
        //si ya tiene contador no usar bandera, se usa cero porque comienza en cero
        mejorScore = scoreIngresado;
        nombreMejorScore = nombreIngresado;
    }
    
    contadorTotalParticipantes++;
    respuesta = confirm("¿Desea ingresar mas datos?");
    
}while(contadorTotalParticipantes < 50 );

if(contadorFemenino > 0){
    promedioEdadFemenino = sumaEdadFemenino / contadorFemenino;//c no se divide por cero
    //document.write("El promedio de edad de todos los participantes femeninos es: " + promedioEdadFemenino + "<br>");
    document.write("la suma eddad femenino" + sumaEdadFemenino + "contador eddad femenino" + contadorFemenino +"<br>");
}
else{
    document.write("No se pudo calcular el promedio" + "<br>");
}

    document.write("La cantidad de participantes mayores de edad es:" + cantidadMayoresEdad + "<br>"); 
    document.write("El nombre del participante con mejor score es: " + nombreMejorScore);

      
}




