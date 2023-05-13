/*
	Desarrollar y probar el código en Entrada y salida Ej 1:

	2- Una concesionaria necesita realizar un sistema de ventas online
	, donde se calculará las preferencias de 11 clientes.

	Los datos necesarios son:
	-Nombre del cliente: (no puede contener números)
	-Edad: (validar que sea mayor a 18 años)
	-Tipo de vehículo:  (Auto - Camioneta - PickUp)
	-Preferencia: (Nafta – Diesel - GNC)
	-Precio por vehículo.
	-Cantidad de vehículos.

	Calcular y mostrar en un document.write:
	A- A la compra más grande realizada, se le otorgará un 15% de descuento, mostrando el nombre del cliente y su edad.
	B- La mínima cantidad de vehículos vendidos.
	C- Cuántas camionetas a GNC se compraron.
	D- El cliente más viejo que compró una PickUp Nafta.
	E- El porcentaje de clientes que compraron Auto, Camioneta y PickUp.
*/
function mostrar() {
	var nombreDelClienteIngresado;
	var edadDelClienteIngresado;
	var tipoDeVehiculo;
	var preferenciDelVehiculo;
	var precioDelVehiculo;
	var cantidadDeVehiculos;
	var totalAPagar;
	var primerIngreso = true;
	var compraMasGrandeRealizada;
	var nombreCompraMasGrandeRealizada;
	var edadCompraMasGrandeRealizada;
	var minimaCantidadVehiculosVendidos;
	var acumuladorCamionetasGNC = 0;
	var banderaClienteMasViejo = true;
	var nombreDelClienteMasViejoPickup;
	var edadDelClienteMasViejoPickup;
	var contadorAuto = 0;
	var contadorCamioneta = 0;
	var contadorPickup = 0;
	var porcentajeCamioneta;
	var porcentajePickup;
	var porcentajeAuto;
	var descuentoCompraMasGrandeRealizada;

	for (var i = 0; i < 11; i++) {
		nombreDelClienteIngresado = prompt("Ingrese su nombre");

		while (!isNaN(nombreDelClienteIngresado)) {
			nombreDelClienteIngresado = prompt("REIngrese su nombre");
		}

		edadDelClienteIngresado = prompt("Ingrese su edad");
		edadDelClienteIngresado = parseInt(edadDelClienteIngresado);

		while (edadDelClienteIngresado < 18) {
			edadDelClienteIngresado = prompt("REIngrese su edad");
			edadDelClienteIngresado = parseInt(edadDelClienteIngresado);
		}

		tipoDeVehiculo = prompt("ingrese su tipo de vehiculo Auto - Camioneta - PickUp");

		while (!isNaN(tipoDeVehiculo) || tipoDeVehiculo != "Auto" &&
			tipoDeVehiculo != "Camioneta" && tipoDeVehiculo != "PickUp") {
			tipoDeVehiculo = prompt("REingrese su tipo de vehiculo Auto - Camioneta - PickUp");
		}
		preferenciDelVehiculo = prompt("ingrese su preferencia de vehiculo Nafta , Diesel - GNC");

		while (!isNaN(preferenciDelVehiculo) || preferenciDelVehiculo != "Nafta" &&
			preferenciDelVehiculo != "Diesel" && preferenciDelVehiculo != "GNC") {
			preferenciDelVehiculo = prompt("REingrese su preferencia de vehiculo Nafta , Diesel - GNC");
		}

		precioDelVehiculo = prompt("Ingrese el precio de su vehiculo");
		precioDelVehiculo = parseFloat(precioDelVehiculo)

		cantidadDeVehiculos = prompt("Ingrese la cantidad de vehiculos");
		cantidadDeVehiculos = parseInt(cantidadDeVehiculos)

		totalAPagar = cantidadDeVehiculos * precioDelVehiculo;

		if (primerIngreso == true) {
			compraMasGrandeRealizada = totalAPagar;
			nombreCompraMasGrandeRealizada = nombreDelClienteIngresado;
			edadCompraMasGrandeRealizada = edadDelClienteIngresado;
			minimaCantidadVehiculosVendidos = cantidadDeVehiculos;
			primerIngreso = false;
		}
		else {
			if (compraMasGrandeRealizada < totalAPagar) {
				compraMasGrandeRealizada = totalAPagar;
				nombreCompraMasGrandeRealizada = nombreDelClienteIngresado;
				edadCompraMasGrandeRealizada = edadDelClienteIngresado;
			}
			if (minimaCantidadVehiculosVendidos > cantidadDeVehiculos) {
				minimaCantidadVehiculosVendidos = cantidadDeVehiculos;
			}
		}


		switch (tipoDeVehiculo) {
			case "Auto":
				contadorAuto++;

				break;

			case "Camioneta":
				contadorCamioneta++;
				if (preferenciDelVehiculo == "GNC") {
					acumuladorCamionetasGNC += cantidadDeVehiculos;
				}
				break;

			case "Pickup":

				contadorPickup++;
				if (preferenciDelVehiculo == "Nafta") {
					if (banderaClienteMasViejo == true) {
						banderaClienteMasViejo = false;
						nombreDelClienteMasViejoPickup = nombreDelClienteIngresado;
						edadDelClienteMasViejoPickup = edadDelClienteIngresado;
					}
					else {
						if (edadDelClienteMasViejoPickup < edadDelClienteIngresado) {
							edadDelClienteMasViejoPickup = edadDelClienteIngresado;
							nombreDelClienteMasViejoPickup = nombreDelClienteIngresado;
						}
					}
				}

				break;
		}
	}

	porcentajeAuto = contadorAuto * 100 / i;
	porcentajeCamioneta = contadorAuto * 100 / i;
	porcentajePickup = contadorAuto * 100 / i;

	compraMasGrandeRealizada = compraMasGrandeRealizada * 0.85;

	document.write("El descuento de la compra termino siendo: " + compraMasGrandeRealizada +
		"Y el nombre y edad del cliente es: " + nombreCompraMasGrandeRealizada + edadCompraMasGrandeRealizada);
	document.write("La mínima cantidad de vehículos vendidos: " + minimaCantidadVehiculosVendidos);
	document.write("La mínima cantidad de vehículos vendidos: " + acumuladorCamionetasGNC);
	document.write("El cliente más viejo que compró una PickUp Nafta:" + edadDelClienteMasViejoPickup
		+ nombreDelClienteMasViejoPickup);
	document.write("El porcentaje de clientes que compraron Auto, Camioneta y PickUp" + porcentajeAuto + porcentajeCamioneta + porcentajePickup);

}

/*
	A- A la compra más grande realizada, se le otorgará un 15% de descuento, mostrando el nombre del cliente y su edad.
	B- La mínima cantidad de vehículos vendidos.
	C- Cuántas camionetas a GNC se compraron.
	D- El cliente más viejo que compró una PickUp Nafta.
	E- El porcentaje de clientes que compraron Auto, Camioneta y PickUp.*/


