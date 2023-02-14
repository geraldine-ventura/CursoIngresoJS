// Enunciado:
// Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste


function mostrar() {
	let destino;

	destino= document.getElementById("txtIdDestino").value ;

	switch (destino) {
		case "Cataratas":
			alert("esta al NORTE");
			break;

		case "Bariloche":
			alert("Esta al OESTE");
			break;

		case "Mar del plata":
			alert("esta al este");
			break;

		case "Ushuaia":
			alert("esta al sur");
			break;

		default:
	}




}