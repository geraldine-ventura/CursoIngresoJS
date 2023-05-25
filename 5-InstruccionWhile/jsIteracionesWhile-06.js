//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

function mostrar() {
	let numero;
	let acumulador = 0;//suma de variables
	let i = 0; //contador suma de const
	let promedio;

	while (i < 5) { // met exacto
		numero = parseFloat(prompt("ingrese 5 numeros para calcular el promedio"));
		acumulador = acumulador + numero;
		i++;
	}
	promedio = acumulador / i;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN