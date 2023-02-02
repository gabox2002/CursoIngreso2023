/* Gabriel Quispe DIV D grupo 3 E/S 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// reservo espacio en memoria para guardar el nombre del usuario
	var nombre;

// guardo en la variable nombre el texto que escribio en usuario dentro de la ventana prompt
	nombre = prompt("ingrese su nombre");
	
// copio en nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la pagina html
	document.getElementById("txtIdNombre").value = nombre;

}

