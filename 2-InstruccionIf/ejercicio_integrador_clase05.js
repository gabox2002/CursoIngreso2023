// Gabriel Quispe DIV D Grupo 3 Ejercicio Integrador Clase 5
function mostrar()
{
    var altura;
    var edad;

    altura = prompt("Ingrese su altura en centímetros");
    altura = parseInt(altura);

    if(altura < 120)
    {
        alert("No puede subirse a la montaña rusa")
    }
    else
    {
        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);

        if(edad < 18 || edad >= 80)
        {
            alert("El Monto a pagar es 200$");
        }
        else
        {
            alert("El monto a pagar es 400$");
        }
    }
}