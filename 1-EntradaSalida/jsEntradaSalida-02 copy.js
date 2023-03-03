
/* Ejercicio 3

En una casa de computación se necesita un programa que permita ingresar datos de 50 ventas realizadas.
Por cada venta, se ingresa:
• Nombre completo del comprador.
• DNI del comprador (debe tener 8 dígitos, sin ceros a la izquierda).
• Nombre del producto vendido (Mouse, Teclado, Auricular).
• Precio unitario del producto (mayor a 0).
• Cantidad de unidades vendidas (mayor a 0).


Informar:

1. Si el cliente compra mas de 5 Unidades de un mismo producto, tendrá un 10% de descuento.
2. La cantidad de unidades vendidas de Auriculares, Mouses y Teclados.

3. El nombre y DNI del comprador que realizó la compra de mayor monto.
4. El producto del que mas cantidades se vendió (Mouses, Teclados o Auriculares).
5. El promedio total recaudado por producto.

Pedir datos por prompt y mostrar por document write o alert.

*******************************************************************************/

function mostrar()
{
	let nombre;
	let dni;
	let producto;
	let precioUnidad;
	let cantUnidadesCompra;
	let descuento;
	let totalBruto;
	let totalAPagar;
	let maxPago;
	let maxPagoNombre;
	let maxPagoDni;
	let promedioAuris;
	let promedioTeclados;
	let promedioMouses;
	let porcionDescuento;
	let masVendido;
	let acumuladorUnidadesAuris = 0;
	let acumuladorUnidadesMouse =0;
	let acumuladorUnidadesTeclado = 0;
	let flagMaxPago = true;
	let acumuladorIngresosAuris = 0;
	let acumuladorIngresosMouse = 0;
	let acumuladorIngresosTeclado = 0;

	for (let index = 0; index < 3; index++) {
		
		nombre = prompt("ingrese nombre");

		dni = prompt("ingrese dni 8 dígitos, sin ceros a la izquierda");
		dni = parseInt(dni);

		while (!(dni < 999999999 && dni > 9999999)) {
			dni = prompt("ingrese dni 8 dígitos, sin ceros a la izquierda");
			dni = parseInt(dni);
		}
		
		producto = prompt("ingrese producto, teclado, mouse, auriculares");

		while (producto != "teclado" && producto != "mouse" && producto != "auriculares") {
			producto = prompt("ingrese producto, teclado, mouse, auriculares");
	  
		}

		precioUnidad = prompt("ingrese el precio x unidad");
		precioUnidad = parseInt(precioUnidad);

		while (precioUnidad < 0 ) {
			precioUnidad =prompt("ingrese el precio x unidad");
			precioUnidad = parseInt(precioUnidad);
		}

		cantUnidadesCompra = prompt("ingrese la cantidad");
		cantUnidadesCompra = parseInt(cantUnidadesCompra);

		while (cantUnidadesCompra < 0 ) {
			cantUnidadesCompra = prompt("ingrese la cantidad");
			cantUnidadesCompra = parseInt(cantUnidadesCompra);
		}
		
		totalBruto = cantUnidadesCompra * precioUnidad;


		switch (producto) {
			case "teclado":
				acumuladorUnidadesTeclado = cantUnidadesCompra + acumuladorUnidadesTeclado;
				acumuladorIngresosTeclado = totalBruto + acumuladorIngresosTeclado;

				break;
			case "auriculares":
				acumuladorUnidadesAuris = cantUnidadesCompra + acumuladorUnidadesAuris;
				acumuladorIngresosAuris = totalBruto + acumuladorIngresosAuris;
				break;

			case "mouse":
				acumuladorUnidadesMouse = cantUnidadesCompra + acumuladorUnidadesMouse;
				acumuladorIngresosMouse = totalBruto + acumuladorIngresosMouse;
				
				break;
			}


			
		if (cantUnidadesCompra >= 5)
		{
			console.log(porcionDescuento);
			porcionDescuento = (totalBruto * 20) / 100;
			totalAPagar = totalBruto - porcionDescuento;
		}
		else
		{
			porcionDescuento = 0;
		}

		if(flagMaxPago == true || totalAPagar > maxPago)
		{
			maxPago = totalAPagar;
			maxPagoNombre = nombre;
			maxPagoDni = dni; 
			flagMaxPago = false;
		}

	}

	if (acumuladorUnidadesAuris > acumuladorUnidadesTeclado && acumuladorUnidadesAuris > acumuladorUnidadesMouse)
	{
		masVendido = "AURICULARES";
	}
	else
	{
		if(acumuladorUnidadesTeclado > acumuladorUnidadesMouse)
		{
			masVendido = "TECLADO";
		}
		else
		{
			masVendido = "MOUSE";
		}
	}

	promedioTeclados = acumuladorIngresosTeclado /acumuladorUnidadesTeclado;
	promedioAuris = acumuladorIngresosAuris/acumuladorUnidadesAuris;
	promedioMouses = acumuladorIngresosMouse/acumuladorUnidadesMouse;


	document.write("usted obtuvo un descuento de: "+ porcionDescuento + " $ porque compro "+ cantUnidadesCompra +" si compra mas de 5 aplica el descuento <br>");
	document.write("la cantidad de unidades de mouses "+ acumuladorUnidadesMouse + "<br>");
	document.write("la cantidad de unidades de teclados "+ acumuladorUnidadesTeclado + "<br>");
	document.write("la cantidad de unidades de auriculares "+ acumuladorUnidadesAuris + "<br>");
	document.write("el promedio de precio de mouses "+ promedioMouses + "<br>");
	document.write("el promedio de precio de teclados "+ promedioTeclados + "<br>");
	document.write("el promedio de precio de auriculares "+ promedioAuris + "<br>");
	document.write("el que mas gasto fue: "+ maxPagoNombre + " el dni es: "+ maxPagoDni +"<br>");
	document.write("el producto mas vendido fue: "+ masVendido + "<br>");
}



