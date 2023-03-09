/* Enunciado 3


Una librería desea corroborar quién es el mejor vendedor para poder premiarlo y
 destacarlo como empleado del mes. 
 Para ello se deben ingresar los siguientes datos dependiendo de las cantidades
 de venta que hubo en el día.

-Carnet de vendedor: (AA203 -A3246 -A8898)
-Genero vendido: (Terror, Infantil, Autoayuda, Mezclado)
-El total vendido
-Estrellas puestas por el cliente (se ingresa un campo numérico que va del 1 al 5)


Una vez finalizado la carga total del día calcular:


1)Cual fue el género más vendido.
2)Cuál fue el vendedor que tiene el menor promedio de estrellas.
3)Si el vendedor superó una cantidad total de $3020 le corresponde una comisión 
del %12, sino del %6. Mostrar la venta mas barata. */

function mostrar() {
	let generoMasVendido;
	let vendedorMenorPromedio;
	let ventaMasBarata;
	let seguir = true;

	let cantTerror = 0;
	let cantInfantil = 0;
	let cantAutoayuda = 0;
	let cantMezclado = 0;
	let menorEstrellas = 0;


	do {
		let carnet = prompt("Carnet").toLowerCase();
		let genero = prompt("Genero").toLowerCase();
		let total = parseInt(prompt("Total"));
		let estrellas = parseInt(prompt("estrellas"));
		let totalVentas = parseFloat(prompt("Ingrese el valor total de las ventas"))
		let valorVenta;
		if (totalVentas >= 3020)
			valorVenta = totalVentas + (valorVenta * 0, 94);
		else
			valorVenta = totalVentas;

		if (!ventaMasBarata)///FALTABA EL !
			ventaMasBarata = valorVenta;

		if (ventaMasBarata > valorVenta)
			ventaMasBarata = valorVenta;

		if (!vendedorMenorPromedio) {
			vendedorMenorPromedio = carnet;
			menorEstrellas = estrellas;
		}

		if (menorEstrellas > estrellas) {
			vendedorMenorPromedio = carnet;
			menorEstrellas = estrellas;
		}

		switch (genero) {
			case "terror":
				cantTerror += total;
				break;
			case "infantil":
				cantInfantil += total;
				break;
			case "autoayuda":
				cantAutoayuda += total;
				break;
			case "cantMezclado":
				cantMezclado += total;
				break;

			default:
				break;
		}
	} while (!seguir)

	if (cantTerror > cantInfantil && cantTerror > cantAutoayuda && cantTerror > cantMezclado)
		generoMasVendido = "terror";


	if (cantInfantil > cantTerror && cantInfantil > cantAutoayuda && cantInfantil > cantMezclado)
		generoMasVendido = "infantil";

	if (cantAutoayuda > cantTerror && cantAutoayuda > cantInfantil && cantAutoayuda > cantMezclado)
		generoMasVendido = "autoayuda";

	if (cantMezclado > cantTerror && cantMezclado > cantInfantil && cantMezclado > cantAutoayuda)
		generoMasVendido = "mezclado";

	alert(generoMasVendido + vendedorMenorPromedio + ventaMasBarata)
}

