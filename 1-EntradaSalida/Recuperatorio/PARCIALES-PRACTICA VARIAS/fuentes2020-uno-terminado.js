
/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
	de cada una debo obtener los siguientes datos:
el tipo(validar "barbijo", "jabón" o "alcohol"),
	el precio(validar entre 100 y 300),
		la cantidad de unidades(no puede ser 0 o negativo y no debe superar las 1000 unidades),
			la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */



function mostrar() {

	//declarar variables  tipo, precio,cant, marca ,fabricante

	let tipo;
	let precio;
	let cant;
	let marca;
	let fabricante;

	let acumuladorBarbijo = 0;
	let acumuladorJabon = 0;
	let acumuladorAlcohol = 0;

	let contadorBarbijo = 0;
	let contadorJabon = 0;
	let contadorAlcohol = 0;

	let precioAlcoholMasBarato;
	let cantMasBaratoAlcohol;
	let fabricaneMasBaratoAlcohol;

	let promedioPorCompra;
	let mayorTipo;
	let flagAlcohol = 0;

	let mensajeAlcohol = "No se compraron alcoholes";
	let mensajeB;
	let mensajeJabon;



	//bucle for 5 unidades 
	for (let i = 0; i < 2; i++) {
		///ingreso de datos 
		//tipo(validar "barbijo", "jabón" o "alcohol"),
		//el precio(validar entre 100 y 300),
		//la cantidad de unidades(no puede ser 0 o negativo y no debe superar las 1000 unidades),

		tipo = prompt(`ingrese tipo: "barbijo", "jabón" o "alcohol"`);
		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {//no olvidar comillas es un string
			tipo = prompt(`Tipo invalido : "barbijo", "jabón" o "alcohol"`);
		}


		precio = parseInt(prompt("ingrese precio entre $100 y $300:  "));
		while (!(precio >= 100 && precio <= 300) || isNaN(precio)) {
			precio = parseInt(prompt("ERROR-. ingrese un valor entre 100 y 300:  "));
		}


		cant = parseInt(prompt("ingrese cantidad max 1000 ud :  "));
		while (!(cant > 0 && cant <= 1000) || isNaN(cant)) {
			cant = parseInt(prompt("ingrese cantidad max 1000 ud:   "));
		}

		marca = prompt("ingrese marca:  ");

		fabricante = prompt("ingrese fabricante:  ");

		//cant del producto en esa iteracion..cada vez que se genere un bucle for
		switch (tipo) {
			case "barbijo":
				acumuladorBarbijo += cant;
				contadorBarbijo++;
				break;

			case "jabon":
				acumuladorJabon += cant;//c) Cuántas unidades de jabones hay en total esta  en acumulador++
				contadorJabon++;
				break;

			case "alcohol":
				acumuladorAlcohol += cant;
				contadorAlcohol++;

				// Del más barato de los alcohol flag alcohol: cant y fabricante
				if (flagAlcohol == 0 || precioAlcoholMasBarato > precio) {//ojo aca es mayor> senbusca elprecio mas barato que los alcoles que tienen el precio de alcohol mas barato.
					precioAlcoholMasBarato = precio;
					cantMasBaratoAlcohol = cant;
					fabricaneMasBaratoAlcohol = fabricante;
					flagAlcohol = 1;
				}
				break;
		}
	}

	//b) Del tipo con mas unidades, el promedio por compra 
	if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
		mayorTipo = "alcohol";
		promedioPorCompra = acumuladorAlcohol / contadorAlcohol;

	} else if (acumuladorBarbijo >= acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon) {
		mayorTipo = "barbijo";
		promedioPorCompra = acumuladorBarbijo / contadorBarbijo;
	}

	else {
		mayorTipo = "jabon";
		promedioPorCompra = acumuladorJabon / contadorJabon;
	}

	if (acumuladorAlcohol == 0) {
		mensajeAlcohol
	}

	else if (flagAlcohol == 1) {
		mensajeAlcohol = "fabricante alcohol mas barato: " + fabricaneMasBaratoAlcohol +
			"\nCantidad: " + cantMasBaratoAlcohol +
			"\nPrecio: " + precioAlcoholMasBarato;
	}

	mensajeB = "B-tipo con mas unidades: " + mayorTipo + ", promedio : " + promedioPorCompra;
	mensajeJabon = "C-unidades de jabon: " + acumuladorJabon;

	alert(mensajeAlcohol + "\n" + mensajeB + "\n" + mensajeJabon);

}







