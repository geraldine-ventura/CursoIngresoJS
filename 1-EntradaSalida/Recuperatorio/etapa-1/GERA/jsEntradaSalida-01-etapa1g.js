/* Enunciado 1..s


En una hamburguesería el cajero debe ir cargando los pedidos de los clientes.
Los datos que se tienen que ingresar son:
Nombre, Apellido, edad.

Que tipo de hamburguesa (simple, doble o veggie), cantidad de hamburguesas.
La simple vale 125, la doble 185 y la veggie 145.

=>>>>Esto se debe cargar hasta que el cajero decida.

Al final, se deberá presentar:

A)Cuál fue el tipo de hamburguesa más comprada.

B)Cual fue el promedio de compra por tipo de hamburguesa.

C)El nombre y apellido de la persona que realizó la compra más barata. */


function mostrar() {
	let nombre;
	let apellido;
	let edad;

	let tipoHamburguesa;
	let promedioSimple = 0;
	let promedioDobl = 0;
	let promedioVeggie = 0;

	const VALOR_SIMPLE = 125;
	const VALOR_DOBLE = 185;
	const VALOR_VEGGIE = 145;

	let totalCompra = 0;
	let totalCompraS = 0;
	let totalCompraD = 0;
	let totalCompraV = 0;


	let cantidadHamburguesasS = 0;
	let cantidadHamburguesasD = 0;
	let cantidadHamburguesasV = 0;

	let totalCantidadHamburguesasS = 0;
	let totalCantidadHamburguesasD = 0;
	let totalCantidadHamburguesasV = 0;

	let contadorS = 0;
	let contadorD = 0;
	let contadorV = 0;

	let respuesta = false;//concidero q resp inicia en false

	//TIPO HAMBURG MAS COMPRADA
	let cantMasComprada = 0;
	let tipoMasComprada;


	//COMPRA MAS BARATA
	let nombreCompraMasBarata;
	let apellidoCompraMasBarata;
	let compraMasBarata;


	let flagCompraMasBarata = 0;
	let flagMasComprada = 0;



	//=>>>> Esto se debe cargar hasta que el cajero decida.
	do {
		nombre = prompt(("ingrese nombre").toLowerCase());
		apellido = prompt(("ingrese apellido").toLowerCase());
		edad = parseInt(prompt("ingrese edad"));
		tipoHamburguesa = prompt(("ingrese tipo de hamburguesa").toLowerCase());

		//B)Cual fue el promedio de compra por tipo de hamburguesa.
		switch (tipoHamburguesa) {

			case "simple":
				//cantidadHamburguesasS = parseInt(prompt("ingrese cantidad de hamburguesas"));
				cantidadHamburguesasS = 5; //borrar
				contadorS++;
				totalCantidadHamburguesasS += cantidadHamburguesasS;//
				totalCompraS = totalCantidadHamburguesasS * VALOR_SIMPLE
				promedioSimple = totalCompraS / contadorS;

				break;

			case "doble":
				//cantidadHamburguesasD = parseInt(prompt("ingrese cantidad de hamburguesas"));
				cantidadHamburguesasD = 10; //borrar
				contadorD++;
				totalCantidadHamburguesasD += cantidadHamburguesasD;
				totalCompraD = totalCantidadHamburguesasD * VALOR_DOBLE;
				promedioDoble = totalCompraD / contadorD;
				break;

			case "veggie":
				//cantidadHamburguesasV = parseInt(prompt("ingrese cantidad de hamburguesas"));
				cantidadHamburguesasV = 7; //borrar
				contadorV++;
				totalCantidadHamburguesasV += cantidadHamburguesasV;
				totalCompraV = totalCantidadHamburguesasV * VALOR_VEGGIE;
				promedioVeggie = totalCompraV / contadorV;
				break;

			default:
				break;
		}

		respuesta = prompt("desea seguir continuando (si/no)").toLowerCase();
		respuesta = respuesta == 'no' ? true : false;

	} while (!respuesta || (isNaN(cantidadHamburguesasD) && isNaN(cantidadHamburguesasS) && isNaN(cantidadHamburguesasV)) ||
		(tipoHamburguesa != 'simple' && tipoHamburguesa != 'doble' && tipoHamburguesa != 'veggie'));

	//A)Cuál fue el tipo de hamburguesa más comprada.****

	if ((totalCantidadHamburguesasS > cantMasComprada) || (flagMasComprada == 0)) {
		cantMasComprada = totalCantidadHamburguesasS; // **SE ASIGNA DE TRAS PARA ADELANTA <==            
		tipoMasComprada = tipoHamburguesa;
		flagMasComprada = 1;
	}
	else if ((totalCantidadHamburguesasD > cantMasComprada) || (flagMasComprada == 0)) {
		cantMasComprada = totalCantidadHamburguesasD;
		tipoMasComprada = tipoHamburguesa;
		flagMasComprada = 1;
	}
	else if ((totalCantidadHamburguesasV > cantMasComprada) || (flagMasComprada == 0)) {
		cantMasComprada = totalCantidadHamburguesasV;
		tipoMasComprada = tipoHamburguesa;
		flagMasComprada = 1;
	}


	//C)El nombre y apellido de la persona que realizó la compra más barata. * /
	totalCompra = totalCompraS + totalCompraD + totalCompraV;


	if ((totalCompra < compraMasBarata) || (flagCompraMasBarata == 0)) {
		compraMasBarata = totalCompra;
		nombreCompraMasBarata = nombre;
		apellidoCompraMasBarata = apellido;

		flagCompraMasBarata = 1
	}

	document.write(
		"el tipo de hamburguesa más comprada: " + tipoMasComprada +

		".\n El promedio de compra por tipo de hamburguesa simple, doble,veggie\n" +
		promedioSimple + ",\n" +
		promedioDoble + ",\n" +
		promedioVeggie + "\n respectivamente." +
		"\n Nombre y apellido de la persona que realizó la compra más barata:\n" +
		nombreCompraMasBarata + "\n" +
		apellidoCompraMasBarata + "\n."

	)
}
