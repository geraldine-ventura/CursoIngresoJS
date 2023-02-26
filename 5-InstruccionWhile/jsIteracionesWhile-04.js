/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (!(numeroIngresado >= 0 && numeroIngresado <= 10)) {
		alert("el numero es invalido");
		numeroIngresado = prompt("ingrese un  otro número entre 0 y 10.");
	}
	alert("Elnumero es valido");
}//FIN DE LA FUNCIÓN