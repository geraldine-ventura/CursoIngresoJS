/*Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".*/

function mostrar() {
	let hora;
	hora = parseInt(document.getElementById("txtIdHora").value);
	switch (hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
		
		default:
			alert("NO Es de mañana.");

	}





}//FIN DE LA FUNCIÓN