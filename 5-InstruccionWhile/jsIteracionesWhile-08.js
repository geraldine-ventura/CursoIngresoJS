/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	var contador = 0;
	var numeroIngresado;
	var sumaPositivos = 0;
	var multiplicacionNegativos=1;
	

	console.log("Ingrese numeros y escriba 0 para terminar y computar");

	do {
		numeroIngresado = parseFloat(prompt("ingresar un numero perteneciente a los R"));
		if (numeroIngresado >= 0) {
			sumaPositivos += numeroIngresado;
		}
		else {
			multiplicacionNegativos *= numeroIngresado;
		}
	}
	while (numeroIngresado !== 0);

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN