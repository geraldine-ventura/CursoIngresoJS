/* Enunciado 2


En una veterinaria se están realizando censos para evaluar los animales 
ingresados por día. 
Por este motivo, se le realizará una consulta al menos 6 clientes.

Se requieren los siguientes datos:
Tamaño de la mascota (Chica, Mediana o Grande).
Sexo de la mascota (Hembra o Macho).
Tipo de mascota (Gato, Perro, Otro).
Edad de la mascota. Validar.
Está vacunado? SI/NO (Se puede utilizar boolean si se desea).
INFORMAR


A- Cuál es el tipo, el sexo y la edad de la mascota más joven entre los tamaños medianos o grandes.
B- Cuál es el promedio de edad de los PERROS.
C- Cuál es el tipo de mascota más vacunado. */

function mostrar() {
	let tipoSexoEdadMasJoven;
	let promedioEdad;
	let tipoMasVacunado;


	let masJoven;
	let cantidad;
	let edadesTotales = 0;
	let cantidadPerros = 0;
	let cantidadGatos = 0;
	let cantidadOtros = 0;

	let edad;
	let tipo;
	let sexo;
	let tamano;
	let edadValidada;
	let estaVacunado = false;

	let banderaSeguir = true;

	for (let i = 0; i < 6 && banderaSeguir; i++) {
		tamano = prompt("Tamaño");
		sexo = prompt("sexo");
		tipo = prompt("Tipo").toLowerCase();

		if (tipo == "perro") {
			cantidadPerros++;
		}
		else if (tipo == "gato") {
			cantidadGatos++;
		}
		else {
			cantidadOtros++;
		}

		do {
			edad = parseInt(prompt('Edad'));
		} while (isNaN(edad));

		edadValidada = edad;

		estaVacunado = prompt('Ingrese si, si esta vacunado').toLowerCase();

		if (estaVacunado == "si") {
			estaVacunado = true;
		}

		if (masJoven) {
			tipoSexoEdadMasJoven = tipo + ' ' + sexo + ' ' + edad;
		}

		if (edad < masJoven) {
			masJoven = edad;
			tipoSexoEdadMasJoven = tipo + ' ' + sexo + ' ' + edad;
		}

		cantidad++;
		edadesTotales += edad;

		let seguir = prompt('escriba no para parar').toLowerCase();

		if (seguir == "no" && i > 5)
			banderaSeguir = false;
	}

	promedioEdad = edadesTotales / cantidad;

	if (cantidadPerros > cantidadGatos && cantidadPerros > cantidadOtros)
		tipoMasVacunado = "perro";

	if (cantidadGatos > cantidadPerros && cantidadGatos > cantidadOtros)
		tipoMasVacunado = "gato";

	if (cantidadOtros > cantidadPerros && cantidadOtros > cantidadGatos)
		tipoMasVacunado = "otro";

}