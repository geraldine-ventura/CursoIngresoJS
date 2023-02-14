// una agencia de viajes debe sacar las tarifas de los viajes
// 					, se cobra $15.000 por cada estadia como base,

// 					 se pide el ingreso de una estacion del año y localidad para vacacionar para
// 					poder  calcular el precio final


// 				</br> </br>en Invierno:
// 				 	bariloche tiene un aumento del 20% 
// 					cataratas y Cordoba tiene un descuento del 10%
// 					Mar del plata  tiene un descuento del 20%
// 				</br></br> en Verano:
// 				 	bariloche tiene un descuento del 20% 
// 					cataratas y Cordoba tiene un aumento del 10%
// 					Mar del plata  tiene un aumento del 20%
// 				</br></br> en Otoño y Primavera:
// 				 	bariloche tiene un aumento del 10% 
// 					cataratas tiene un aumento del 10%
// 					Mar del plata  tiene un aumento del 10%
// 					y Cordoba tiene el precio sin descuento


function mostrar() {
	let estacion;
	let destino;
	let precioFinal;
	let descuento = 0;
	let aumento = 0;
	const TARIFA_VIAJE = 15000;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				descuento = 0.20;
			}
			else if (destino == "Mar del plata") {
				descuento = 0.20;
			}
			else {
				descuento = 0.10;
			}
			break;

		case "Verano":
			if (destino == "Bariloche") {
				descuento = 0.20;
			}
			else if (destino == "Mar del plata") {
				aumento = 0.20;
			}
			else {
				aumento = 0.10;
			}
			break;

		case "Otoño":
		case "Primavera":
			if (destino != "Cordoba") {
				aumento = 0.10;
			}
			break;
	}

	if (aumento != 0) {
		precioFinal = TARIFA_VIAJE + (TARIFA_VIAJE * aumento);
	}
	else if (descuento != 0) {
		precioFinal = TARIFA_VIAJE - (TARIFA_VIAJE * descuento);
	}
	else {
		precioFinal = TARIFA_VIAJE
	}
	alert(`El precio final es $ ${precioFinal}.`)
}
