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
			switch (destino) {
				case "Bariloche":
					aumento = 0.2;
					break;

				case "Mar del plata":
					descuento = 0.2;
					break;

				default:
					descuento = 0.1;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = 0.1;
			}//NO INCLUYO break PORQUE QUIERO QUE CONTINUE CON "Otoño".
			break;

		case "Verano":
			switch (destino) {
				case "Bariloche":
					descuento = 0.2;
					break;

				case "Mar del plata":
					aumento = 0.2;
					break;

				default:
					aumento = 0.1;
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
