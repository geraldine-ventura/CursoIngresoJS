/* Enunciado 3


Una librería desea corroborar quién es el mejor vendedor para poder premiarlo y
 destacarlo como empleado del mes. 
 Para ello se deben ingresar los siguientes datos

 <""dependiendo de las cantidades
 de venta que hubo EN EL DIA."">

-Carnet de vendedor: (AA203 -A3246 -A8898)
-Genero vendido: (Terror, Infantil, Autoayuda, Mezclado)
-El total vendido
-Estrellas puestas por el cliente (se ingresa un campo numérico que va del 1 al 5)


Una vez finalizado la carga total del día calcular:


1)Cual fue el género más vendido.
2)Cuál fue el vendedor que tiene el mayor promedio de estrellas.
3)Si el vendedor superó una cantidad total de $3020 le corresponde una comisión 
del %12, sino del %6. 
Mostrar la venta mas barata. */



function mostrar() {
	let carnetVendedor;
	let contadorGenero = 0;
	let generoMasVendido;
	let contadorMayorGenero = 0;
	let flagContadorGenero = 0;

	let totalVendido = 0;
	let venta;
	let ventaMasBarata;
	let comision;
	let flagVentaMasBarata = 0;

	let estrellasAsignadas;
	let totalEstrellasA3246 = 0;
	let totalEstrellasA8898 = 0;
	let totalEstrellasAA203 = 0;
	let contadorEstrellas = 0;

	//let promedioDeMayorEstrellas;
	let vendedorConMayorPromedioEstrellas;
	//let flagPromedioEstrellas = 0;
	let mayorPromedioEstrellas;

	let totalVentasConComision = 0;


	let promedioEstrellasA3246 = 0;
	let promedioEstrellasA8898 = 0;
	let promedioEstrellasAA203 = 0;

	//1)ingresar datos diarios 

	do {
		do {

			carnetVendedor = prompt(" Ingrese Carnet de vendedor: (AA203 , A3246 , A8898); ").toUpperCase();
		}
		while (carnetVendedor != "AA203" && carnetVendedor != "A3246" && carnetVendedor != "A8898");

		do {
			genero = prompt(" Ingrese Genero vendido: (Terror, Infantil, Autoayuda, Mezclado); ").toLowerCase();
		}
		while (genero != "infantil" && genero != "terror" && genero != "autoayuda" && genero != "mezclado");

		do {
			venta = parseInt(prompt(" Ingrese monto de  Venta ralizada; "));
		}
		while (isNaN(venta) || venta < 0);

		do {
			estrellasAsignadas = parseInt(prompt(" Ingrese Estrellas puestas por el cliente, entre 1 y 5; "));
		}
		while (!(estrellasAsignadas >= 6) && (isNaN(estrellasAsignadas)));




		//1)Cual fue el género más vendido.(contador de genero ++) flag SWITCH
		switch (genero) {
			case "terror":
				contadorGenero++;
				break;

			case "infantil":
				contadorGenero++;
				break;

			case "autoayuda":
				contadorGenero++;
				break;

			case "mezclado":
				contadorGenero++;
			default:
				break;
		}

		if (flagContadorGenero == 0 || contadorMayorGenero > contadorGenero) {
			contadorMayorGenero = contadorGenero;
			generoMasVendido = genero;

			flagContadorGenero = 1

		}
		//2)Cuál fue el vendedor que tiene el "MAYOR PROMEDIO" de estrellas.//calcular promedio de estrellas.(totalEstrellas/contadorEstrellas)

		switch (carnetVendedor) {
			case "AA203":
				totalEstrellasAA203 += estrellasAsignadas;
				contadorEstrellas++;
				promedioEstrellasAA203 = (totalEstrellasAA203 / contadorEstrellas).toFixed(2);

				//condicion if si supera $3020, comisión del % 12, sino del % 6.

				/* if (totalVentas >= 3020){
				  valorVenta = totalVentas + (valorVenta * 0, 88);
				  }
				  else{
				  valorVenta = totalVentas + (valorVenta * 0, 94);
				   } */
				totalVendido += venta;

				if (!(totalVendido < 3020)) {
					comision = totalVendido * 0.12;

				} else {
					comision = totalVendido * 0.06;

				}

				//Mostrar la venta mas barata.
				totalVentasConComision = totalVendido + comision;

				if (flagVentaMasBarata == 0 || flagVentaMasBarata > totalVentasConComision) {
					ventaMasBarata = totalVentasConComision;
					flagVentaMasBarata = 1;
				}

				break;

			case "A3246":
				totalEstrellasA3246 += estrellasAsignadas;
				contadorEstrellas++;
				promedioEstrellasA3246 = (totalEstrellasA3246 / contadorEstrellas).toFixed(2);

				//condicion if si supera $3020, comisión del % 12, sino del % 6.
				totalVendido += venta;

				if (!(totalVendido < 3020)) {
					comision = totalVendido * 0.12;

				} else {
					comision = totalVendido * 0.6;
				}

				//Mostrar la venta mas barata.
				totalVentasConComision = totalVendido + comision;

				if (flagVentaMasBarata == 0 || flagVentaMasBarata > totalVentasConComision) {
					ventaMasBarata = totalVentasConComision;
					flagVentaMasBarata = 1;
				}
				break;

			case "A8898":
				totalEstrellasA8898 += estrellasAsignadas;
				contadorEstrellas++;
				promedioEstrellasA8898 = (totalEstrellasA8898 / contadorEstrellas).toFixed(2);

				//condicion if si supera $3020, comisión del % 12, sino del % 6.
				totalVendido += venta;

				if (!(totalVendido < 3020)) {// esto deberia haberlo calculado afuera del switch:/
					comision = totalVendido * 0.12;

				} else {
					comision = totalVendido * 0.6;
				}

				//Mostrar la venta mas barata.
				totalVentasConComision = totalVendido + comision;

				if (flagVentaMasBarata == 0 || flagVentaMasBarata > totalVentasConComision) {
					ventaMasBarata = totalVentasConComision;
					flagVentaMasBarata = 1;
				}
			default:
				break;

		}
		/* if (flagPromedioEstrellas == 0 || mayorPromedioEstrellas > promedioEstrellas) {
			mayorPromedioEstrellas = promedioEstrellas;
			vendedorConMayorPromedioEstrellas = carnetVendedor;
	
			flagPromedioEstrellas = 1;
	
		} */
		seguir = prompt("Desea cotinuar ingresando ventas? si/no").toLowerCase();


	} while (seguir == "si");

	/* //venta mas barata: if else..
	if (totalVendidoMasComAA203 < totalVendidoMasComA8898 && totalVendidoMasComAA203 < totalVendidoMasComA3246) {
		ventaMasBarata = totalVendidoMasComAA203;
	
	} if (totalVendidoMasComA8898 <= totalVendidoMasComAA203 && totalVendidoMasComA8898 < totalVendidoMasComA3246) {
		ventaMasBarata = totalVendidoMasComA8898;
	
	} else {
		ventaMasBarata = totalVendidoMasComA3246;
	} */

	//vendedor con mayor promedio de estrellas
	if (promedioEstrellasAA203 > promedioEstrellasA8898 && promedioEstrellasAA203 > promedioEstrellasA3246) {
		mayorPromedioEstrellas = promedioEstrellasAA203;
		vendedorConMayorPromedioEstrellas = carnetVendedor;

	} if (promedioEstrellasA3246 >= promedioEstrellasAA203 && promedioEstrellasA3246 > promedioEstrellasA8898) {
		mayorPromedioEstrellas = promedioEstrellasA3246;
		vendedorConMayorPromedioEstrellas = carnetVendedor;

	} else {
		mayorPromedioEstrellas = promedioEstrellasA8898;
		vendedorConMayorPromedioEstrellas = carnetVendedor;
	}
	document.write(
		"(1) El género más vendido: " + generoMasVendido +
		+".\n (2) el vendedor que tiene el mayor promedio de estrellas:" + vendedorConMayorPromedioEstrellas + "con un promedio de: " + mayorPromedioEstrellas
		+ ".\n (3) El vendedor superó una cantidad total de $3020 le corresponde una comisión del 12 %  sino del % 6% , por lo tanto a este le corresponde una comision de :$ " + comision
		+ ".\nLa venta mas barata es de $" + ventaMasBarata + "."
	)

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 1)Cual fue el género más vendido.
2)Cuál fue el vendedor que tiene el mayor promedio de estrellas.
3)Si el vendedor superó una cantidad total de $3020 le corresponde una comisión
del % 12, sino del % 6. 
Mostrar la venta mas barata. * / */


/*function mostrar() {
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
		valorVenta = totalVentas + (valorVenta * 0, 88);
	else
		valorVenta = totalVentas + (valorVenta * 0, 94);


		//esto esta mall!!!
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
	//esto esta mall!!!
	

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

 */