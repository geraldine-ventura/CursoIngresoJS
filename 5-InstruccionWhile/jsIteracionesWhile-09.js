/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables

	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var seguir;
	var flag = 0;
	var seguir = 'si';

	do {
		numeroIngresado = parseFloat(prompt("ingrese numero para evaluar"));
		//debo reconocer si estoy pidiendo por primera vez
		if (flag == 0 || numeroIngresado > numeroMaximo) {
			//si es asi inicializo max y min con numero ingresado
			 numeroMaximo = numeroIngresado ;
		}
		//caso contrario me fijo si tengo un nuevo max y nuevo min y los actualizo de ser necesario..
		if (flag == 0 || numeroIngresado < numeroMinimo) {
			numeroMinimo = numeroIngresado;
			flag = 1;
		}
		seguir = prompt("¿desea continuar ingresando num?");
	}
	while (seguir == "si");
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimmo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN