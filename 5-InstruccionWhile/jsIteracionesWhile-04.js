/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let numeroIngresado;
	numeroIngresado = parseFloat(prompt("ingrese un número entre 0 y 10."));

	while (isNaN(numeroIngresado) || (!(numeroIngresado > 0 && numeroIngresado < 10))) {
		alert("el numero es invalido");
		numeroIngresado = parseFloat(prompt("ingrese nuevamente el num "));
	}
	alert("Elnumero es valido");
}//FIN DE LA FUNCIÓN