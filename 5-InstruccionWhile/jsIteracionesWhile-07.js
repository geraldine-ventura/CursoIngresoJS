/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;
	let respuesta;


	do {//true
		numeroIngresado = parseFloat(prompt("ingrese numero"));
		console.log(numeroIngresado);
		acumulador += numeroIngresado;
		console.log(contador++);
		respuesta=prompt("Ingrese si, para ingresar otro numero") ;

	} while (respuesta=="si");
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN
