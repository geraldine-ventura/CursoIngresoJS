/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {

	//definicion de variables
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let soltero;
	let casado;
	let divorciado;
	let viudo;
	let sueldoBruto;
	let NúmeroDeLegajo;
	let Nacionalidad;
	let Argentino;
	let Extranjeros;
	let Nacionalizado;

	while (!(edadIngresada > 17 && edadIngresada < 91)) {
		edadIngresada = parseInt(prompt("ingrese edad ente 18 y 90 inclusive"));
	}
	while (sexoIngresado != "m" && sexoIngresado != "f") {
		sexoIngresado = prompt("ingrese sexo “M” para masculino y “F” para femenino").toLowerCase();

		if (sexoIngresado == "f")
			alert("femenino");

		else
			alert("masculino");
	}

	

	switch (estadoCivilIngresado) {
		case 1:
			alert(soltero);
		case 2:
			alert(casado);
		case 3:
			alert(divorciado);
		case 4:
			alert(viudo);
			estadoCivilIngresado = parseInt(prompt("ingrese Estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
			break;
		default:

	}

	while (sueldoBruto > 8001) {
		sueldoBruto = parseInt(prompt("ingrese sueldo bruto, no menor a 8000."));
		alert(sueldoBruto);
	}
	while (!(NúmeroDeLegajo > 999 && NúmeroDeLegajo < 9999)) {
		NúmeroDeLegajo = parseInt(prompt("ingrese Número de legajo, numérico de 4 cifras, sin ceros a la izquierda"));
		alert(NúmeroDeLegajo);
	}
	switch (Nacionalidad) {
		case "A": 
			alert(Argentino);
		case "E": 
			alert(Extranjeros);
		case "N": 
			alert(Nacionalizado);

			Nacionalidad= prompt("ingrese Nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados").toLowerCase();
			break;
		default:
	}

	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = NúmeroDeLegajo;
	document.getElementById("txtIdNacionalidad").value = Nacionalidad;

}