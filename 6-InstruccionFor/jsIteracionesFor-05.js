function mostrar() {

	let numero;

	for (; ;) {

		numero = parseInt(prompt("ingrese num: "));

		if (numero == 9) {
			break;
		}
		console.log(numero);
		//alert("usted ingreso" + numero)
	}
	console.log(numero);
}
//for (let i = 0; i > 0; i++) 