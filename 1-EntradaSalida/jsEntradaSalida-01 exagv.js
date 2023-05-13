'use strict';

/*
1- Un local de computación que se especializa en venta de insumos importados desea 
calcular ciertas métricas en base a las ventas de sus productos.

Se ingresa DE CADA venta:>>>>>>>>>>>>>>>>>>>>>>>>>>>>> (Ingresa mínimo 6 ventas)
-Nombre del producto.ok
-Género: (Memorias – Discos – Motherboards)ok
-Tipo de Venta: (Online – Local)ok
-Importe: (No pueden ser números negativos ni mayor a los $45500)ok


Se pide:
A- La más barata de las “Motherboards” con su importe .no
B- De la venta más cara, el nombre del producto.ok
C- El importe promedio del total.ok
D- La cantidad de ventas online que sean de “Discos” y cuesten menos de $945.ok
*/
function mostrar() {
	let motherMasBarata;
	let productoVentaMasCara;
	let promedioTotal;
	let cantidadVentaDiscosOnlineMenos = 0;

	//Variables de ayuda
	let valorProductoVentaMasCara;
	let total = 0;
	let cantidad = 0;
	let seguir = false;

	///inicio un bucle abieto...
	for (let i = 0; i <= 6 || seguir != 'quit'; i++) {

		let nombreProducto = prompt("Nombre").toLowerCase();
		let genero = prompt("Genero").toLowerCase();
		let tipoVenta = prompt("Tipo").toLowerCase();
		let importe = parseFloat(prompt("importe").toLowerCase());

		//A- La más barata de las “Motherboards” con su importe .no
		if (nombreProducto == 'motherboard') {
			if (!motherMasBarata)
				motherMasBarata = importe;

			if (importe < motherMasBarata)
				motherMasBarata = importe;
		}
		///B- De la venta más cara, el nombre del producto.ok
		if (!productoVentaMasCara)
			productoVentaMasCara = nombreProducto;
		valorProductoVentaMasCara = importe

		if (valorProductoVentaMasCara < importe) {
			productoVentaMasCara = nombreProducto;
			valorProductoVentaMasCara = importe
		}
		//D- La cantidad de ventas online que sean de “Discos” y cuesten menos de $945.ok
		if (tipoVenta == 'online' && genero == 'discos' && importe < 946)
			cantidadVentaDiscosOnlineMenos++;
		//C- El importe promedio del total.ok
		total += importe;
		cantidad++;

		if (i > 6)
			seguir = prompt("Ingrese quit para terminar")
	}
	//FIN Bucle

	promedioTotal = total / cantidad;
}
