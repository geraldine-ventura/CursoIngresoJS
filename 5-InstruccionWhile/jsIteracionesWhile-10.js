/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar() {
	//declarar contadores y variables 
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadNumerosPares = 0;
	var diferenciaPositivosNegativos;
	var mientras = "si";

	do {
		numeroIngresado = parseFloat(prompt("ingrese numero:   "))

		if (numeroIngresado > 0) {
			sumaPositivos += numeroIngresado;
			cantidadPositivos++;
		}
		else if (numeroIngresado== 0) {
			cantidadCeros++;
		}
		else {
			sumaNegativos += numeroIngresado;
			cantidadNegativos++;
		}
		if (numeroIngresado % 2 == 0) {
			cantidadNumerosPares++;
		}
		mientras = prompt("desea continuar?");
		
	} while (mientras == "si");


	if (sumaPositivos > 0) {
		promedioPositivos = sumaPositivos / cantidadPositivos;
	}

	if (sumaNegativos < 0) {
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}


	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;


	document.write("la suma de negativos es :  " + sumaNegativos);
	document.write("la suma de positivos es :  " + sumaPositivos);
	document.write("Cantidad de positivos es:  " + cantidadPositivos);
	document.write("la cantidad de negativos es: " + cantidadNegativos);
	document.write("la cantidad de ceros es: " + cantidadCeros);
	document.write("la cantidad de num pares es: " + cantidadNumerosPares);
	document.write(" Promedio de positivos es:  " + promedioPositivos);
	document.write("Promedios de negativos	 es:  " + promedioNegativos);
	document.write("Diferencia entre positivos y negativos es: " + diferenciaPositivosNegativos);

}

//FIN DE LA FUNCIÓN

