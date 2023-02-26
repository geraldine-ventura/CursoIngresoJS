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
	let sueldoBruto;
	let NúmeroDeLegajo;
	let Nacionalidad;

	edadIngresada = parseInt(prompt("ingrese edad ente 18 y 90 inclusive"));
	while (!(edadIngresada > 17 && edadIngresada < 91)) {
		edadIngresada = parseInt(prompt("edad fuera del rango, vuelva a ingresar"))
	}
	console.log(edadIngresada);

	while (sexoIngresado != "m" && sexoIngresado != "f") {
		sexoIngresado = prompt("ingrese sexo “M” para masculino y “F” para femenino").toLowerCase();
	}
	if (sexoIngresado == "f") {
		sexoIngresado = "femenino";
		console.log("femenino");
	}
	else {
		console.log("masculino");
		sexoIngresado = "masculino";

	}

	estadoCivilIngresado = parseInt(prompt("ingrese Estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	switch (estadoCivilIngresado) {
		case 1:
			estadoCivilIngresado = "soltero";
			console.log(estadoCivilIngresado);
			break;
		case 2:
			estadoCivilIngresado = "casado";
			console.log(estadoCivilIngresado);
			break;
		case 3:
			estadoCivilIngresado = "divorciado";
			console.log(estadoCivilIngresado);
			break;
		case 4:
			estadoCivilIngresado = "viudo";
			console.log(estadoCivilIngresado);
			break;
		default:

	}
	sueldoBruto = parseInt(prompt("ingrese sueldo bruto, no menor a 8000."));//este mensaje con el prompt ,solo se visualiza una sola vez
	while (!(sueldoBruto > 7999)) {
		sueldoBruto = parseInt(prompt("el sueldo es inferior al pedido, ingreselo nuevamente"));
	}
	console.log(sueldoBruto);

	NúmeroDeLegajo = parseInt(prompt("ingrese Número de legajo, numérico de 4 cifras, sin ceros a la izquierda"));
	while (!(NúmeroDeLegajo > 999 && NúmeroDeLegajo < 9999)) {

		NúmeroDeLegajo = parseInt(prompt("legajo inexistente, ingrese nuevamente"));
	}
	console.log(NúmeroDeLegajo);

	Nacionalidad = prompt("ingrese Nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados").toUpperCase();
	switch (Nacionalidad) {
		case "A":
			Nacionalidad = "Argentino";
			console.log(Nacionalidad);
			break;
		case "E":
			Nacionalidad = "Extranjero";
			console.log(Nacionalidad);
			break;
		case "N":
			Nacionalidad = "Nacionalizado";
			console.log(Nacionalidad);
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