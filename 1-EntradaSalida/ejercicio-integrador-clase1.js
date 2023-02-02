/* Gabriel Quispe DIV D Grupo 3 Ejercicio Integrador Clase 01
Se debe ingresar por prompt:razón social de la empresa y nombre del titular.
El dni del titular y la fecha de inicio de actividades 
se ingresarán por id.
Mostrar por alert todos los datos y el cuit de la empresa, 
sabiendo que el mismo está conformado por un código según el tipo de persona 
(30 en el caso de empresas),
un guión, el dni del titular, otro guión y un dígito verificador
(será un número aleatorio entre 0 y 9).
*/
function mostrar()
{
    
    var razonSocial;
    var nombreTitular;
     //numero aleatorio entre 0 y 9
    var x = Math.floor(Math.random() * 10); 
    console.log(x);

    razonSocial = prompt("Ingrese su razón social: ");
    nombreTitular = prompt ("Ingrese su nombre de titular: ");
	
    dniTitular = document.getElementById("dniTitular").value;
	fechaInicio = document.getElementById("fechaInicio").value;
    
    alert("Su razón social es " + razonSocial + " registrado a nombre de " + nombreTitular + " desde fecha de inicio de operaciones el " + fechaInicio + " y su cuit es 30-" + dniTitular + "-" + x );

}

/* 
id: dniTitular
id: fechaInicio
*/