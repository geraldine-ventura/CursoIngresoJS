//al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

function mostrar() {

	let repeticiones = parseInt(prompt("ingrese cant repeticiones: "));
	for (let i = 1; i <= repeticiones; i++) {

		console.log(i + " Hola  UTN-FRA");

	}
}