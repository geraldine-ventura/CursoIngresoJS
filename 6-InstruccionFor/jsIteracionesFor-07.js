/* l presionar el botón pedir un número.
 mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados. */

function mostrar() {
	let numero;
	let cantDivisor = 0;

	numero = parseInt(prompt("Ingrese un num: "));

	for (let i = 1; i <= numero; i++)
		if (numero % i == 0) {
			console.log("El numero: " + i + " , es divisor del numero: " + numero);
			cantDivisor++;
		}

	console.log("La cant de divisores es: " + cantDivisor);


}//FIN DE LA FUNCIÓN