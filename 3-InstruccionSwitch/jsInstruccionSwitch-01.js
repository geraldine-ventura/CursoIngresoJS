
Enunciado:
// al seleccionar un mes informar.
// si es Enero: "que comiences bien el año!!!."
// si es Marzo: "a clases!!!."
// si es Julio: "se vienen las vacaciones!!!."
// si es Diciembre: "Felices fiesta!!!."

function mostrar() {
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;

		case "Marzo":
			alert("A CLASES!!!.");
			break;

		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;

		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
	}

}//FIN DE LA FUNCIÓN