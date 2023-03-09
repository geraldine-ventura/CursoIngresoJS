/* Enunciado 1


En una hamburguesería el cajero debe ir cargando los pedidos de los clientes.
Los datos que se tienen que ingresar son:
Nombre, Apellido, edad.

Que tipo de hamburguesa (simple, doble o veggie), cantidad de hamburguesas.
La simple vale 125, la doble 185 y la veggie 145.
Esto se debe cargar hasta que el cajero decida.
Al final, se deberá presentar:

A)Cuál fue el tipo de hamburguesa más comprada.

B)Cual fue el promedio de compra por tipo de hamburguesa.

C)El nombre y apellido de la persona que realizó la compra más barata. */

	
function mostrar() {
	let hamburguesaMasComprada;
	let promedioCompraHamburguesaSimple;
	let promedioCompraHamburguesaDoble;
	let promedioCompraHamburguesaVeggie;
	let nombreCompraMasBarata;

	let totalSimple = 0;
	let totalVeggie = 0;
	let totalDoble = 0;
	let compraMasBarata = 0;

	let banderaTerminar = false;


	do {
		let nombre = prompt("Nombre");
		let apellido = prompt("Apellido");
		let edad = prompt("edad");

		let tipoHamburguesa = prompt("Tipo hamburguesa").toLowerCase();
		let cantidadHamburguesas = parseInt(prompt("Cantidad"));

		if (!hamburguesaMasComprada) {
			hamburguesaMasComprada = tipoHamburguesa;
		}


		switch (tipoHamburguesa) {
			case "simple":
				const valorSimple = 125;
				totalSimple += cantidadHamburguesas;
				const valorTotalCompraSimple = cantidadHamburguesas * valorSimple;

				if (valorTotalCompraSimple < compraMasBarata) {
					nombreCompraMasBarata = nombre + ' ' + apellido;
					compraMasBarata = valorTotalCompraSimple;
				}

				break;
			case "doble":
				const valorDoble = 185;
				totalDoble += cantidadHamburguesas;
				const valorTotalCompraDoble = cantidadHamburguesas * valorDoble;

				if (valorTotalCompraDoble < compraMasBarata) {
					nombreCompraMasBarata = nombre + ' ' + apellido;
					compraMasBarata = valorTotalCompraDoble;
				}
				break;
			case "veggie":
				const valorVeggie = 185;
				totalVeggie += cantidadHamburguesas;
				const valorTotalCompraVeggie = cantidadHamburguesas * valorVeggie;

				if (valorTotalCompraVeggie < compraMasBarata) {
					nombreCompraMasBarata = nombre + ' ' + apellido;
					compraMasBarata = valorTotalCompraVeggie;
				}
				break;
		}
		
	} while (!banderaTerminar);

	if (totalSimple > totalDoble && totalSimple > totalVeggie)
		hamburguesaMasComprada = "simple";

	if (totalDoble > totalSimple && totalDoble > totalVeggie)
		hamburguesaMasComprada = "doble";

	if (totalVeggie > totalSimple && totalVeggie > totalDoble)
		hamburguesaMasComprada = "veggie";


	promedioCompraHamburguesaSimple = totalSimple / cantidadHamburguesas;
	promedioCompraHamburguesaDoble = totalDoble / cantidadHamburguesas;
	promedioCompraHamburguesaVeggie = totalVeggie / cantidadHamburguesas;
}
