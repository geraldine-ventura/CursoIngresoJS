/* Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche */


function mostrar() {
	let estacion;
	let destino;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert("se viaja");
				default:
					alert("no se viaja");
			}
			break;

		case "Verano":
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
					alert("se viaja");
					break;// como tengo un deafault, luego de dos case iguales debo usar un break
				default:
					alert("no se viaja");
			}
			break;

		case "Otoño":
			switch (destino) {
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					alert("se viaja a todos los destinos");
				//no es necesario poner break
			}
			break;

		case "primavera":
			switch (destino) {
				case "Bariloche":
					alert("no se viaja");
				default:
					alert("se viaja");
			}
			break;
	}


}
