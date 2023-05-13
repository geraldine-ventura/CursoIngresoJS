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
	//let cantidad;
	let edadesTotales = 0;//para perros
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

	for (let i = 0; i < 5 && banderaSeguir; i++) {

		tamano = prompt("Tamaño");//Tamaño de la mascota(Chica, Mediana o Grande).
		sexo = prompt("sexo");//Sexo de la mascota(Hembra o Macho).
		tipo = prompt("Tipo").toLowerCase();//Tipo de mascota(Gato, Perro, Otro).

		//Tipo de mascota(Gato, Perro, Otro).

		if (tipo == "perro") {
			cantidadPerros++;
			edadesTotales += edad;//edades totales para perros (*****esto lo movi de abajo )
		}
		else if (tipo == "gato") {
			cantidadGatos++;
		}
		else {
			cantidadOtros++;
		}
		//Edad de la mascota.Validar.

		do {
			edad = parseInt(prompt('Edad'));
		} while (isNaN(edad));

		edadValidada = edad;

		//Está vacunado ? SI / NO(Se puede utilizar boolean si se desea).
		estaVacunado = prompt('Ingrese si, si esta vacunado').toLowerCase();

		if (estaVacunado == "si") {
			estaVacunado = true;
		}
		//A - Cuál es el tipo, el sexo y la edad de la mascota más joven entre los tamaños medianos o grandes.
		if (masJoven && tamano != "chico") { //falto !=chico
			tipoSexoEdadMasJoven = tipo + ' ' + sexo + ' ' + edad;
		}

		if (edad < masJoven && tamano != "chico") {
			masJoven = edad;
			tipoSexoEdadMasJoven = tipo + ' ' + sexo + ' ' + edad;
		}

		//B - Cuál es el promedio de edad de los PERROS.

		/* cantidad++;
		edadesTotales += edad; //*******esto lo subi a la cond perros
 */
		let seguir = prompt('escriba no para parar').toLowerCase();

		if (seguir == "no" || i > 5) // va ||
			banderaSeguir = false;
	}

	promedioEdad = edadesTotales / cantidadPerros;// "cantidad"=>>"cantidad perros"

	//C - Cuál es el tipo de mascota más vacunado.
	if (cantidadPerros > cantidadGatos && cantidadPerros > cantidadOtros)
		tipoMasVacunado = "perro";

	if (cantidadGatos > cantidadPerros && cantidadGatos > cantidadOtros)
		tipoMasVacunado = "gato";

	if (cantidadOtros > cantidadPerros && cantidadOtros > cantidadGatos)
		tipoMasVacunado = "otro";

}