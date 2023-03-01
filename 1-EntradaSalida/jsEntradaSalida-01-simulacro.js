/*

En una partida de todos contra todos de CS-GO (Juego de disparos) un grupo de 5 amigos quiere saber las estadísticas al finalizar la partida.
Para esto se requieren los siguientes datos:

Nombre del jugador.
edadJugador del jugador - Mayor de edadJugador.
Bajas (Cantidad de veces que mató) - Número positivo inclusive 0.
Muertes (Cantidad de veces que murió) - Número positivo inclusive 0.
INFORMAR
A) Nombre del jugador más joven.
B) El jugador que más bajas tuvo.
C) El jugador que menos muertes tuvo.
D) El promedio de bajas.
E) Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
F) El nombre y edadJugador del jugador que más muertes tuvo.

*/
function mostrar() {


	let nombreDelJugador;
	let nombreDelJugadorMasJoven;
	let nombreJugadorMasMuertes;
	let nombreJugadorMasBajas;
	let nombreJugadorMenosMuertes;

	let edadJugador;
	let edadMinJugador;
	let edadJugadorMasMuertes;

	let bajas = 0;
	let jugadorMasBajas;

	let muertes = 0;
	let jugadorMenorMuertes;
	let jugadorMasMuertes;

	let promedio;
	let cantDeJugadores = 0;
	let cantDeBajas=0;


	let flagMasJoven;
	let flagBajas = 0;
	let flagMasMuertes = 0;
	let flagMenosMuertes = 0;



	for (let i = 0; i < 2; i++) {// def let, cant de jugadores,incremento

		do {
			nombreDelJugador = prompt("ingrese nombre del jugador").toLowerCase();
			console.log(nombreDelJugador);

		}
		while (!isNaN(nombreDelJugador));//(isNaN =esto no es un numero  !isNaN=esto es un numero)

		do {
			edadJugador = parseInt(prompt("ingrese edad del jugador mayor de 18"));
		}
		while (isNaN(edadJugador) || edadJugador < 18);

		do {
			bajas = parseInt(prompt("ingrese cant de bajas del jugador "));
		}
		while (!(isNaN || bajas < 0));//Número positivo inclusive 0.

		do {
			muertes = parseInt(prompt("ingrese cant de muertes del jugador "));
		}
		while (!(isNaN || muertes < 0));

		//A) Nombre del jugador más joven.
		if (flagMasJoven == 0 || edadJugador < edadMinJugador) {
			edadMinJugador = edadJugador;
			nombreDelJugadorMasJoven = nombreDelJugador;

			// B) El jugador que más bajas tuvo.
			flagMasJoven = 1;
		}
		if (flagBajas == 0 || bajas > jugadorMasBajas) {

			jugadorMasBajas = bajas;
			nombreJugadorMasBajas = nombreDelJugador;

			flagBajas = 1;
		}
		//C) El jugador que menos muertes tuvo.
		if (flagMenosMuertes == 0 || muertes < jugadorMenorMuertes) {

			jugadorMenorMuertes = muertes;
			nombreJugadorMenosMuertes = nombreDelJugador;

			flagMenosMuertes = 1;
		}

		//F) El nombre y edadJugador del jugador que más muertes tuvo.!!!verrrrr!!!
		if (flagMasMuertes == 0 || muertes > jugadorMasMuertes) {
			jugadorMasMuertes = muertes;
			nombreJugadorMasMuertes = nombreDelJugador;

			edadJugadorMasMuertes = edadJugador;

			flagMasMuertes = 1;

		}

		//E) Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
		if ((edadJugador > 19 && edadJugador < 31) && (bajas > 9 && bajas < 16)) {
			cantDeJugadores++;
		}

		//D) El promedio de bajas.
		cantDeBajas += bajas;
		promedioDeBajas = cantDeBajas / i;
	}


	let mensaje = "\n nombre del jugador mas joven: " + nombreDelJugadorMasJoven;
	mensaje += "\n nombre del jugador que mas bajas tuvo: " + nombreJugadorMasBajas;
	mensaje += "\n nombre del jugador que menos muertes tuvo: " + nombreJugadorMasMuertes;
	mensaje += "\n El promedio de bajas:  " + promedio;
	mensaje += "\nCantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15: " + cantDeJugadores;
	mensaje += "\n El nombre y edadJugador del jugador que más muertes tuvo: \n" + nombreJugadorMasMuertes + " ,edad: " + edadJugadorMasMuertes;
	alert(mensaje);
}
/* A) Nombre del jugador más joven.
B) El jugador que más bajas tuvo.
C) El jugador que menos muertes tuvo.
D) El promedio de bajas.
E) Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
F) El nombre y edadJugador del jugador que más muertes tuvo. */