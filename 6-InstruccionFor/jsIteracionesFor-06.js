Enunciado:
//al presionar el botón pedir un número.
//mostrar los numeros pares desde el 1 al número ingresado, 
//y mostrar la cantidad de numeros pares encontrados.

function mostrar() {
	let numero;
	let contadorPar = 0;

	numero = parseInt(prompt("ingrese un numero: "));

	for (let i = 1; i < numero; i++) {

		if (i % 2 == 0) {

			contadorPar++;
			console.log("el numero: " + i + "es par");
		}
	}
	console.log("La cant de pares es: " + contadorPar + "es par");

}
