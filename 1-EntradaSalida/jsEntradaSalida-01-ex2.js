/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar() {
	//varia pples
	let nombre;
	let edad;
	let nacionalidad;
	let canVictorias = 0;//carreras ganadas
	let nunVehiculo;

	//varia secundarias
	let cantVehiculoPar;
	let pilotoMasJoven;
	let nombreMenosVictorias;
	let nombreImparMenosVictorias;

	let masVictorias
	let menosVictorias
	//banderas
	let flagVictorias

	edad = parseInt(prompt("edad"));
	if (edad > 18)

		nacionalidad = prompt("ingrese nacionalidad").toLowerCase;
	switch (nacionalidad) {
		case "argentino":
			nacionalidad= "argentino";

			break;
		case "brasilero":
			nacionalidad= "brasilero";
			break;
		case "ingles":
			nacionalidad=  "ingles";
			break;
		case "frances":
			nacionalidad= "frances";
			break;
		case "estadounidense":
			nacionalidad= "estadounidense";
			break;
		default:
			break;
	}

	canVictorias = parseInt(prompt("numero de carreras ganadas"));
	if (canVictorias >= 0)

		nunVehiculo = parseInt(prompt("numero del vehiculo"));
	if (canVictorias >= 0)

	//a
	if (flagEdad(pilotoMasJoven) && (edad < edadMasJoven)) {
		edad = edadMasJoven;
		nacionalidad = pilotoMasJoven;
	}
	//e
	else if (flagVictorias(canVictorias) || vitorias > masVictorias) {
		canVictorias += masVictorias
		nombre = nombreMenosVictorias;
		flagVictorias == true
	}
	//b
	if (nunVehiculo % 2 == 0) {
		cantVehiculoPar++;
	}
	//c
	if (flagVictorias(canVictorias) || (vitorias < menosVictorias)) {
		if (nunVehiculo % 2 !== 0)
			canVictorias += menosVictorias;

		else if (flagEdad(pilotoMasViejo) && edad > edadMasViejo)
			edad = edadMasViejo;
		nacionalidad = pilotoMasViejo;

		//d
		if (edad < 26 && nunVehiculo % 2 !== 0) {
			nombre = nombreImparMenosVictorias;
			nombre = nombreMenosVictorias;
			lagVictorias == true;
		}
	}
	//e
	else if (flagVictorias(canVictorias) || vitorias > masVictorias) {

		canVictorias += masVictorias;
		nombre = nombreMenosVictorias;
		flagVictorias == true;
	}
	//f



}








