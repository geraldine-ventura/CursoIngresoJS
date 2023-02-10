/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre; // declaro la variable
	nombre= prompt("ingrese su nombre"); // prompt caja de texto para guardar (acep o canc)
	
	document.getElementById(txtIdNombre).value=nombre;
}

