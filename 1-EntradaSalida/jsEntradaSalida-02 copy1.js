/******************************************************************************

Ejercicio 3

En una casa de computación se necesita un programa que permita ingresar datos de 50 ventas realizadas.
Por cada venta, se ingresa:
• Nombre completo del Vendidasdor.XXXX
• DNI del Vendidasdor (debe tener 8 dígitos, sin ceros a la izquierda).XXXX
• Nombre del producto vendido (, , Auricular).XXXX

• Precio unitario del producto (mayor a 0).X
• Cantidad de unidades vendidas (mayor a 0).X


Informar:

1. Si el cliente lleva  Vendidas mas de 5 Unidades de un mismo producto, tendrá un 10% de descuento.

3. El nombre y DNI del Vendidasdor que realizó la Ventas de mayor monto.


2. La cantidad de unidades vendidas de Auriculares, s y s.XXXX

4. El producto del que mas cantidades se vendió (s, s o Auriculares).X

5. El promedio total recaudado por producto.XXXX

Pedir datos por prompt y mostrar por document write o alert.

*******************************************************************************/


function mostrar() {

	let nombre;
	let dni;
	let producto;

	let precioUnitario = 0;
	let cantUniVendidas = 0;
	let descuento = 0;
	let totalPrecioBruto;
	let totalPrecioNeto;

	let ventasMayorMonto;
	let vendedorMayorMonto;

	let acumuladorA = 0;
	let acumuladorM=0;
	let acumuladorT=0;

	let acumuladorIngresos = 0;

	let promedioAuris;
	let promedioMouses;
	let promediosTeclados;

	let productoMasVendido;
	let flagMaxPago = true;
	let flagCantVentas = true;





	for (let index = 0; index < 50; index++) {

		nombre = prompt("ingrese nombre");

		do {
			dni = parseInt(prompt("ingrese dni 8 dígitos, sin ceros a la izquierda"));
		}

		while (dni.toString().length != 8)
		//while (!(dni < 999999999 && dni > 9999999))

		producto = prompt("ingrese el nombre del producto: teclado, auriculares, mouse ").toLowerCase;
		precioUnitario = parseFloat(prompt("ingrese el precio x unidad"));
		cantUniVendidas = parseInt(prompt("ingrese la cantidades vendidas"));
		totalPrecioBruto = cantUniVendidas * precioUnitario;

		switch (producto) {
			case "teclado":
				acumuladorT += cantUniVendidas;
				acumuladorIngresos += totalPrecioBruto;
				promediosTeclados = acumuladorIngresos / acumuladorT;
				break;

			case "auriculares":
				acumuladorA += cantUniVendidas;
				acumuladorIngresos += totalPrecioBruto;
				promedioAuris = acumuladorIngresos / acumuladorA;
				break;

			case "mouse":
				acumuladorM += cantUniVendidas;
				acumuladorIngresos += totalPrecioBruto;
				promedioMouses = acumuladorIngresos / acumuladorM;
				break;

			default:
				alert("el producto no existe");
		}

		if (cantUniVendidas > 6) {
			descuento = totalPrecioBruto * 0.1
			totalPrecioNeto = totalPrecioBruto - descuento;
		}

		else if (flagMaxPago == true || totalPrecioNeto > ventasMayorMonto) {
			totalPrecioNeto = ventasMayorMonto;

			vendedorMayorMonto = nombre;
			dniMayorMonto = dni;
			flagMayorMonto = false;
		}

		else if (flagCantVentas == true || cantUniVendidas > masVendido){
			cantUniVendidas = masVendido;
			producto = productoMasVendido;
			flagCantVentas = false;
		}
	}
	let mensaje = "usted obtuvo un descuento de: " + descuento + " $ porque compro " + cantUniVendidas + " , si Vendidas mas de 5 aplica el descuento <br>";
	mensaje += "la cantidad de unidades de teclados " + acumuladorT + "<br>";
	mensaje += "la cantidad de unidades de mouses " + acumuladorM + "<br>";
	mensaje += ("la cantidad de unidades de auriculares " + acumuladorA + "<br>");
	mensaje += ("el promedio de precio de teclados " + promedioAuris + "<br>");
	mensaje += ("el promedio de precio de mouses " + promediosTeclados + "<br>");
	mensaje += ("el promedio de precio de auriculares " + promedioMouses + "<br>");
	mensaje += ("el vendedeor que realizo las ventas de mayor monto: " + vendedorMayorMonto + " el dni es: " + dniMayorMonto + "<br>");
	mensaje += ("el producto mas vendido fue: " + productoMasVendido + "<br>");

	document.write(mensaje);
}
