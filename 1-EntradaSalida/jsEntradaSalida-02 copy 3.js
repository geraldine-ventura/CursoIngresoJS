/******************************************************************************
Ejercicio 1


Para una peluquería se necesita un programa que permita ingresar datos de los trabajos realizados hasta
que el usuario quiera.
Por cada trabajo, se ingresa:
A. Trabajo: ("corte", "tintura", "peinado").
B. Nombre del cliente,
C. Edad del cliente (entre 8 y 100)
D. Precio base (1000).



Informar:
1. Si el cliente tiene menos de 12 años, tendrá un descuento del 20% sobre el precio base.
2. Si el trabajo a realizarse es “corte”, tendrá un incremento del 20% sobre el precio base, si es “tintura”
50%.
3. El nombre del cliente que mas gasto.
4. El trabajo realizado al cliente con menor edad.
5. El importe total facturado
6. El porcentaje de trabajos realizados Ej: ["corte": 30%, "tintura": 40%, "peinado": 30%]



Pedir datos por prompt y mostrar por document write o alert.

*******************************************************************************/



function mostrar()
{
 let trabajo;
 let nombre;
 let incremento;
 let edad;
 let confirmacion;
 let proporcionDescuento;
 const PRECIOBASE = 1000;
 let totalAPagar;
 let personaMasGasto;
 let flagMasGasto = true;
 let nombreMasGasto;
 let trabajoMasJoven;
 let flagMasJoven = true;
 let masJoven;
 let totalTrabajos;
 let porcentajeCorte;
 let porcentajePeinado;
 let porcentajeTintura;
 let nombreMasJoven;
 let contadorTintura = 0;
 let contadorPeinado = 0;
 let contadorCorte = 0;
 let importeFacturado = 0;

 
 	
 do {
	
	trabajo = prompt("ingrese el trabajo, corte, tintura o peinado, en minusculas");

	while (trabajo != "peinado" && trabajo != "tintura" && trabajo != "corte") {

		trabajo = prompt("Re ingrese el trabajo, corte, tintura o peinado, en minusculas");
	}
		nombre = prompt("ingrese nombre");

		edad = prompt("ingrese edad entre 8 y 100");
		edad = parseInt(edad);

		while (edad < 8 || edad > 100) {
			edad = prompt("Re ingrese edad entre 8 y 100");
			edad = parseInt(edad);
		}

		switch (trabajo) {
			case "corte":
				contadorCorte++;

				break;
			case "peinado":
				contadorPeinado++;
					break;

			case "tintura":
				contadorTintura++;
		
				break;
		}
		
		if (edad < 12)
		{
			proporcionDescuento = PRECIOBASE * 0.20 ;
		}
		else
		{
			proporcionDescuento = 0;
		}

		if( trabajo == "corte")
		{
			incremento = 20;
		}
		else
		{
			if ( trabajo == "tintura")
			{
				incremento = 50;
			}
			else
			{
				incremento = 0;
			}
		}

		totalTrabajos = contadorCorte + contadorTintura + contadorPeinado;
		totalAPagar = PRECIOBASE -  proporcionDescuento  + incremento;

		if (flagMasGasto == true || totalAPagar > personaMasGasto)
		{
			personaMasGasto = totalAPagar;
			nombreMasGasto = nombre;
			flagMasGasto = false;
		}

		if (flagMasJoven == true || masJoven > edad)
		{
			masJoven = edad;
			nombreMasJoven = nombre;
			trabajoMasJoven = trabajo;
			flagMasJoven = false;
		}

		importeFacturado = totalAPagar + importeFacturado;
		confirmacion = confirm("desea ingresar mas datos?");
	}while (confirmacion == true)
	
	


	porcentajeCorte = contadorCorte / totalTrabajos * 100;
	porcentajeTintura = contadorTintura / totalTrabajos  * 100;
	porcentajePeinado = contadorPeinado / totalTrabajos  * 100;

 	document.write("hay un descuento de: " + proporcionDescuento + " sobre el total <br>");
 	document.write("hay un aumento de: " + incremento + " sobre el total, porque usted eligio " + trabajo + "<br>");
 	document.write("porcentaje tintura:  " + porcentajeTintura + " % <br>");
 	document.write("porcentaje corte:  " +  porcentajeCorte + "% <br>");
 	document.write("porcentaje peinado:  " + porcentajePeinado + " % <br>");
 	document.write("el que mas gasto fue " + nombreMasGasto + "<br>");
 	document.write("el mas joven es "+ nombreMasJoven + " y se realizo " + trabajoMasJoven + "<br>");
	document.write("el importe total facturado hasta ahora es: " + importeFacturado + "<br>");
	
 



}

