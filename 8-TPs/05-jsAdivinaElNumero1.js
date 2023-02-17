/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var numeroIntentos = 0;

function comenzar(){
	//Genero el número RANDOM entre 1 y 100--> numeroSecreto = Math.floor(Math.random()*((maximo+1)-minimo) + minimo);
  numeroSecreto = Math.floor(Math.random()*(100) + 1);
  numeroSecreto = parseInt(numeroSecreto);
  
  alert(numeroSecreto); 
} 

function verificar(){
	numeroIngresado = txtIdNumero.value;
  numeroIngresado = parseInt(numeroIngresado);
  
  numeroIntentos = numeroIntentos + 1;
  numeroIntentos = parseInt(numeroIntentos);
  txtIdIntentos.value = numeroIntentos; 

  if(numeroIngresado == numeroSecreto){
    alert("Usted es un ganador!!! y en solo " + numeroIntentos + " intentos");
  }
  else{
    if(numeroIngresado < numeroSecreto){
      alert("Le falta para llegar al Número Secreto");
    }
    else{
      alert("Se pasó del Número secreto");
    }
  }	
} 