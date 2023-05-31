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


A- Cuál es el tipo, el sexo y la edad de la mascota más joven entre los ""TAMAÑOS!!""" medianos o grandes.
B- Cuál es el promedio de edad de los PERROS.
C- Cuál es el tipo de mascota más vacunado. */

function mostrar() {
	let tamaño;//(Chica, Mediana o Grande).
	let sexo;//Hembra o Macho).
	let tipo;// (Gato, Perro, Otro)
	let edad;//validar

	let mensajeVacuna = "esta vacunado"
	let mensajeNoVacuna = " NO esta vacunado"

	let i;

	let promedioEdad;

	let edadPerros = 0;
	let contadorPerros = 0;

	let edadMasJoven;
	var sexoMasJoven;
	var tipoMasJoven;

	let flagMasJoven = 0;
	let contandorVacuna = 0;

	let tipoMasVacunado;
	let masVacunado;
	let estaVacunado;

	// bucle for para 6 ingres
	for (i = 0; i < 3; i++) {

		//pedir datos y validar :

		tipo = prompt("tipo de la mascota: Gato, Perro, Otro").toLocaleLowerCase();
		while (tipo != "gato" && tipo != "perro" && tipo != "otro") {
			tipo = prompt("ERROR tipo invalido ingrese Gato, Perro, Otro");
		}

		tamaño = prompt("ingrese tamaño de la mascota: Chica, Mediana o Grande").toLocaleLowerCase();
		while (tamaño != "chica" && tamaño != "mediana" && tamaño != "grande") {
			tamaño = prompt("ERROR ingrese tamaño de la mascota: Chica, Mediana o Grande");
		}

		sexo = prompt("sexo de la mascota: Hembra o Macho").toLocaleLowerCase();
		while (sexo != "hembra" && sexo != "macho") {
			sexo = prompt("ERROR sexo invalido ingrese: Hembra o Macho");
		}
		edad = parseInt(prompt("edad de la mascota: "));
		while (edad < 0 || isNaN(edad)) {
			edad = parseInt(prompt(" EDAD INVALIDA ingrese edad de la mascota: "));
		}

		respuestaVacuna = prompt("Está vacunado ? SI / NO").toLocaleLowerCase();
		estaVacunado = (respuestaVacuna.toLocaleLowerCase() == "si");

		switch (tipo) {
			case "gato":

				switch (tamaño) {
					case "mediano":
					case "grande":
						//de la mascota más joven>>
						if ((flagMasJoven == 0) || (edadMasJoven > edad)) {
							edadMasJoven = edad;
							sexoMasJoven = sexo;
							tipoMasJoven = tipo;

							flagMasJoven = 1;
						}
						break;
					default:
				}
				/* while (estaVacunado == true) {

					contandorVacuna++;

					if (flagVacuna == 0 || masVacunado < contandorVacuna) {// mall tengo que ver como utilizar los booleanos de vacuna

						masVacunado = contandorVacuna;
						tipoMasVacunado = tipo;
						mensajeVacuna;
						flagVacuna = 1;

					}
					else {
						mensajeNoVacuna;
					}
				}
 */
				break;

			case "perro":
				switch (tamaño) {

					case "mediano":
					case "grande":

						edadPerros += edad;//acumulador
						contadorPerros++;//contador

						if (flagMasJoven == 0 || edadMasJoven > edad) {
							edadMasJoven = edad;
							sexoMasJoven = sexo;
							tipoMasJoven = tipo;

							flagMasJoven = 1;
						}
						break;
					default:
				}

				/* C - Cuál es el tipo de mascota más vacunado. * / */
				/* while (estaVacunado == true) {

					contandorVacuna++;

					if (flagVacuna == 0 || masVacunado < contandorVacuna) {//mal

						masVacunado = contandorVacuna;
						tipoMasVacunado = tipo;
						mensajeVacuna;
						flagVacuna = 1;
					}

					else {
						mensajeNoVacuna;
					}
				} */
				break;


			case "otro":
				switch (tamaño) {
					case "mediano":
					case "grande":

						if (flagMasJoven == 0 || edadMasJoven > edad) {//ver siggo>
							edadMasJoven = edad;
							sexoMasJoven = sexo;
							tipoMasJoven = tipo;

							flagMasJoven = 1;
						}
						break;
					default:
				}

				/* while (estaVacunado == true) {

					contandorVacuna++;
					//-------------------------------------------------ver para abajo  vacuna .(

					if (flagVacuna == 0 || masVacunado < contandorVacuna) {//mal

						masVacunado = contandorVacuna;
						tipoMasVacunado = tipo;
						mensajeVacuna;

						flagVacuna = 1;
					}
					else {
						mensajeNoVacuna;
					}
				} */
				break;

			default:
		}
	}
	console.log(`el tipo mas vacunado es ${tipoMasVacunado}, con ${masVacunado} cantidad de vacunas dadas `);


	console.log(`entre los tamaños medianos y grandes tipo, edad, sexo mas joven respectivamente:  `)
	console.log(tipoMasJoven);
	console.log(edadMasJoven);
	console.log(sexoMasJoven);

	promedioEdad = edadPerros / contadorPerros;
	tipoMasVacunado;
	console.log(`promedio de edad perros ${promedioEdad}`);
}



/*function mostrar() {
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
		edadesTotales += edad; //*******esto lo subi a la cond perros*/

/* let seguir = prompt('escriba no para parar').toLowerCase();

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

} * / */