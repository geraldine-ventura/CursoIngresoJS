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
	let tipoHamburguesa;
	let nombre;
	let apellido;
	let edad;

	let hamburguesaMasComprada;

	let cantidadHamburguesas;
	let promedioCompraHamburguesaSimple;
	let promedioCompraHamburguesaDoble;
	let promedioCompraHamburguesaVeggie;

	let nombreCompraMasBarata;
	let apellidoCompraMasBarata;

	const VALOR_SIMPLE = 125;
	const VALOR_DOBLE = 185;
	const VALOR_VEGGIE = 185;

	let totalCompraSimple = 0;
	let totalCompraVeggie = 0;
	let totalCompraDoble = 0;

	let cantidadHamburguesasS = 0;
	let cantidadHamburguesasD = 0;
	let cantidadHamburguesasV = 0;

	let contadorS = 0;
	let contadorD = 0;
	let contadorV = 0;


	let compraMasBarata = 0;
	let flagCompraMasBarata = 0;

	do {
		nombre = prompt("Nombre: ");
		apellido = prompt("Apellido: ");
		edad = parseInt(prompt("Edad: "));

		tipoHamburguesa = prompt("Tipo hamburguesa (simple, doble o veggie): ").toLowerCase();

		while ((tipoHamburguesa != "simple") && (tipoHamburguesa != "doble") && (tipoHamburguesa != "veggie")) {
			tipoHamburguesa = prompt("ERROR >>>Tipo invalido:(simple, doble o veggie): ");
		}

		cantidadHamburguesas = parseInt(prompt("Ingrese cantidad: "));
		while ((isNaN(cantidadHamburguesas)) || (cantidadHamburguesas < 0)) {

			cantidadHamburguesas = parseInt(prompt("ERROR>>> Ingrese cantidad: "));
		}

		switch (tipoHamburguesa) {

			case "simple":

				cantidadHamburguesasS += cantidadHamburguesas;
				contadorS++;
				totalCompraSimple = cantidadHamburguesasS * VALOR_SIMPLE;

				//C)El nombre y apellido de la persona que realizó la compra más barata. 
				if ((flagCompraMasBarata == 0 || compraMasBarata > totalCompraSimple)) {
					compraMasBarata = totalCompraSimple;
					nombreCompraMasBarata = nombre;
					apellidoCompraMasBarata = apellido;

					flagCompraMasBarata = 1;
				}
				break;

			case "doble":

				cantidadHamburguesasD += cantidadHamburguesas;
				contadorD++;
				totalCompraDoble = cantidadHamburguesasD * VALOR_DOBLE;

				//C)El nombre y apellido de la persona que realizó la compra más barata. 
				if ((flagCompraMasBarata == 0 || compraMasBarata > totalCompraDoble)) {
					compraMasBarata = totalCompraDoble;
					nombreCompraMasBarata = nombre;
					apellidoCompraMasBarata = apellido;

					flagCompraMasBarata = 1;
				}

				break;

			case "veggie":

				cantidadHamburguesasV += cantidadHamburguesas;
				contadorV++;// contador
				totalCompraVeggie = cantidadHamburguesasV * VALOR_VEGGIE;

				//C)El nombre y apellido de la persona que realizó la compra más barata. 
				if ((flagCompraMasBarata == 0 || compraMasBarata > totalCompraVeggie)) {
					compraMasBarata = totalCompraVeggie;
					nombreCompraMasBarata = nombre;
					apellidoCompraMasBarata = apellido;

					flagCompraMasBarata = 1;
				}

				break;

		}
		seguir = prompt("desea ingresar otro pedido?:  ").toLowerCase();

	} while (seguir == "si");

	//A)Cuál fue el tipo de hamburguesa más comprada.

	if ((totalCompraSimple > totalCompraDoble) && (totalCompraSimple > totalCompraVeggie)) {
		hamburguesaMasComprada = "simple";
	}

	else if ((totalCompraDoble >= totalCompraSimple) && (totalCompraDoble > totalCompraVeggie)) {
		hamburguesaMasComprada = "doble";
	}
	else {
		hamburguesaMasComprada = "veggie";
	}
	console.log(hamburguesaMasComprada);

	//B)Cual fue el promedio de compra por tipo de hamburguesa.
	promedioCompraHamburguesaSimple = cantidadHamburguesasS / contadorS;
	promedioCompraHamburguesaDoble = cantidadHamburguesasD / contadorD;
	promedioCompraHamburguesaVeggie = cantidadHamburguesasV / contadorV;

	// ver como corregir la div por cero

	console.log(promedioCompraHamburguesaDoble);
	console.log(promedioCompraHamburguesaSimple);
	console.log(promedioCompraHamburguesaVeggie);

	//C)El nombre y apellido de la persona que realizó la compra más barata. ESTO ESTABA MALL!!NO ME funciomaba!

	/* if ((totalCompraSimple < totalCompraDoble) && (totalCompraSimple < totalCompraVeggie)) {
		compraMasBarata = totalCompraSimple;
		nombreCompraMasBarata = nombre;
		apellidoCompraMasBarata = apellido;
	}
	else if ((totalCompraDoble <= totalCompraSimple) && (totalCompraDoble < totalCompraVeggie)) {
		compraMasBarata = totalCompraDoble;
		nombreCompraMasBarata = nombre;
		apellidoCompraMasBarata = apellido;
	}
	else {
		compraMasBarata = totalCompraVeggie;
		nombreCompraMasBarata = nombre;
		apellidoCompraMasBarata = apellido;
	}
	console.log(nombreCompraMasBarata);
	console.log(apellidoCompraMasBarata); */
	document.write(
		"El tipo de hamburguesa más comprada: " + hamburguesaMasComprada +

		".\n El promedio de compra por tipo de hamburguesa simple:" + promedioCompraHamburguesaSimple + ",\ndoble:" + promedioCompraHamburguesaDoble + ", \nveggie:" + promedioCompraHamburguesaVeggie

		+ "\nNombre y apellido de la persona que realizó la compra más barata:\n" +
		nombreCompraMasBarata + "\n" +
		apellidoCompraMasBarata + "\n.(el costo total de la compra mas barata fue: " + compraMasBarata + ")."
	)
}