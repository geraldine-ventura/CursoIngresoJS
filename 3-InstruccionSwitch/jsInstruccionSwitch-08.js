// Enunciado:
// Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
function mostrar()
{let destino;

	destino= document.getElementById("txtIdDestino").value ;

	switch (destino) {
		case "Cataratas":
			alert("calor");
			break;

		case "Bariloche":
			alert("frio");
			break;

		case "Mar del plata":
			alert("calor");
			break;

		case "Ushuaia":
			alert("frio");
			break;

		default:
	}

	
}//FIN DE LA FUNCIÓNvar destinoIngresado =txtIdDestino.value;

