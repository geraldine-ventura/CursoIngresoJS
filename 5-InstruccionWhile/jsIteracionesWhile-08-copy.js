/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	var numeroIngresado;
	var sumaPositivos = 0;
	var multiplicacionNegativos = 1;
	var flag = 0;

	do {
		numeroIngresado = parseFloat(prompt("ingresar un numero perteneciente a los R"));
		//console.log(numeroIngresado);
		if (numeroIngresado >= 0) {
			sumaPositivos += numeroIngresado;
		}
		else {
			false = 1;
			multiplicacionNegativos *= numeroIngresado;
		}
		seguir = prompt("¿quiere ingresar otro numero");
	} while (seguir == "si");

	if (flag == 0) {
		multiplicacionNegativos = 0;
	}
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN