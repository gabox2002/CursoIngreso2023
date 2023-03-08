/*En el ingreso a un viaje en avion nos solicitan 
nombre
edad
sexo("f" o "m") 
estado civil("soltero", "casado" o "viudo") 
temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
f)la Nacionalidad de la persona con mas temperatura.
g)La cantidad de Mujeres que hay solteras  o viudas.
h)El promedio de edad entre las mujeres casadas.
Curso de ingreso UTN FRA */

function mostrar()
{
    let nombre;
    let edad;
    let sexo;
    let estadoCivil;
    let temperaturaCorporal;
    let banderaDelPrimero;
    let nombreMasTemp;
    let nombreMenosTemp;
    let contadorMayorViudos;
    let contadorSolteros;
    let contadorTempMayor;
    let acumuladorEdadSolteros;
    let promedioSolteros;

    contadorMayorViudos = 0;
    contadorSolteros = 0;
    contadorTempMayor = 0;
    contadorHombres = 0;
    acumuladorEdadSolteros = 0;
    banderaDelPrimero = true;
    continuar = true;

    while(continuar == true)
    {
        nombre = prompt("Ingrese su nombre");

        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);
        while(edad>0){
            edad = prompt("Ingrese su edad");
            edad = parseInt(edad);
        }

        sexo = prompt("Ingrese su sexo: f (para femenino); m (para masculino)");
        while(sexo != "f" && sexo!= "m"){
            sexo = prompt("Ingrese su sexo: f (para femenino); m (para masculino)");
        }
        
        estadoCivil = prompt("Ingrese su estado civil: soltero/casado/viudo");
        while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
        estadoCivil = prompt("Reingrese su estado civil: soltero/casado/viudo");
        }

        temperaturaCorporal = prompt("Ingrese su temperatura");
        temperaturaCorporal = parseInt(temperaturaCorporal);

    switch(estadoCivil)
    {
        case "viudo":
            if(edad > 17){
                contadorMayorViudos ++;  // b) Cuantos mayores de edad estan viudos
            }
            break;
        case "soltero":    // c) La cantidad de hombres que hay solteros
            if(sexo == "m"){
                contadorSolteros ++;
                acumuladorEdadSolteros += edad;
            }
            break;
    }

    continuar = confirm("¿Desea ingresar mas datos?");
    }//FIN DEL WHILE 

    // e) El promedio de edad entre los hombres solteros.
    if(contadorSolteros>0) {
        promedioSolteros = acumuladorEdadSolteros / contadorSolteros; 
        document.write("El promedio de edad entre hombres soltero es de: " + promedioSolteros);
    }
    else{
        document.write("El promedio de edad entre hombres soltero NO se puedo calcular");

    }
    
    // a) El nombre de la persona con mas temperatura.

    if (banderaDelPrimero == true){
        nombreMasTemp = temperaturaCorporal;
        nombreMenosTemp = temperaturaCorporal;
        banderaDelPrimero = false;
    }

    if (nombreMasTemp > temperaturaCorporal){
        nombreMasTemp = temperaturaCorporal;
    } 
    else{
        if (temperaturaCorporal < nombreMenosTemp){
            nombreMenosTemp = temperaturaCorporal;
        }
    }

// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
    if(edad > 60 && temperaturaCorporal > 38){
        contadorTempMayor ++;
    }

    document.write("El nombre de la persona con mas temperatura es: " + nombreMasTemp + "<br>");

    document.write("Cantidad de mayores viudos es: " + contadorMayorViudos + "<br>");

    document.write("Cantidad de hombres solteros: " + contadorSolteros + "<br>");

    document.write("Personas de la tercera edad tienen mas de 30 de temperatura: " + contadorTempMayor + "<br>");


}
