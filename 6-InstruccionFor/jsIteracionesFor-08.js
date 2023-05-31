/* al presionar el botón pedir un número.
Informar si el numero es PRIMO o no. */

function mostrar() {
	let numero;
	let contadorDiv;

	numero = parseInt(prompt("ingrese un num para evaluar si es primo: "));

	while (isNaN(numero)) {//validacion
		numero = parseInt(prompt("Eso no es un num, ingrse un num: "));
	}

	for (let i = 2; i < numero; i++) {//restrinjo : todos los num primos son divisibles por 1 y por si mismo,


		if (numero % i == 0) {// evaluo: es decir q si tiene algun divisor es primo
			contadorDiv++;
		}

	}

	if (contadorDiv != 0 || numero <= 1) {// comparo si es , o no.
		console.log("El numero: " + numero + " ,no es primo");
	}

	else {
		console.log("El numero; " + numero + "  ,es primo");
		contadorDiv++;
	}
}




