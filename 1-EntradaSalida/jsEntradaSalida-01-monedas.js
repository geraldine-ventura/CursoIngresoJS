/*
En una carga indefinida de datos (hasta que el usuario quiera) se desea llevar a cabo el registro diario de una granja de minería en Bitcoin y Ethereum.
Se requieren los siguientes datos:
Nombre de la criptomoneda (VALIDAR EL INGRESO solo de BTC o ETH).
Cantidad de BTC o ETH minado ese día - Número positivo.
Cotización diaria en USD - Número positivo inclusive 0.
INFORMAR
A) Nombre y cantidad de la criptomoneda más minada.
B) Nombre de la criptomoneda que mayor cotización tuvo.
C) Cantidad total de ingreso bruto en USD de cada criptomoneda.

D) Sabiendo que el coste de electricidad para:
BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.

E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337.
Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
"El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".
Siendo .X1 el neto en ARS y X2 el impuesto aplicado.
*/

function mostrar() {


    const BTC = 'BTC';
    const ETH = 'ETH';
    let nombreDeLaMoneda;
    let nombreDeLaMonedaMasMinada;
    let cantidadDeLaMonedaMinada;

    let cantidadBtc = 0;
    let cantidadEth = 0;
    let contizacionaActual = 0;
    let cotizacionDiaria = 0;
    let seguir;
    let ingresoBrutoDolar;
    let ingresoTotalNetoDolar;
    let ingresoTotalNetoPesos
    let costeElectricidad;
    let afip;
    let mensaje;

    let flagCotizacionMoneda = 0;
    let flagCant = 0;

    let acumulador = 0;

    do {
        nombreDeLaMoneda = prompt("ingrese nombre de la moneda BTC O ETH").toUpperCase();
        cotizacionDiaria = parseFloat(prompt("ingrese la cotizacion del día en $dolares"));

        //C) Cantidad total de ingreso bruto en USD de cada criptomoneda.//
        if (nombreDeLaMoneda == "BTC") {
            cantidadBtc = parseFloat(prompt("ingrese cantidad de de BTC"));
            ingresoBrutoDolar = cotizacionDiaria * cantidadBtc;



            /* D) Sabiendo que el coste de electricidad para:
            BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD. */
            costeElectricidad = ingresoBrutoDolar * 0.07;
            ingresoTotalNetoDolar = (ingresoBrutoDolar - costeElectricidad);// en dolar
            //E) Convertir el ingreso neto en ARS solo para ETH.
            ingresoTotalNetoPesos = ingresoTotalNetoDolar * 337;
            //A) Nombre y cantidad de la criptomoneda más minada.

            if (flagCant == 0 || (cantidadBtc > cantidadEth)) {
                acumulador += cantidadBtc;//Cantidad de BTC o ETH minado ese día - Número positivo.
                cantidadDeLaMonedaMinada = acumulador;
                nombreDeLaMonedaMasMinada = nombreDeLaMoneda;//Cantidad de ETH o ETH minado ese día - Número positivo.
                flagCant = 1;
            }
        }

        else if (nombreDeLaMoneda == "ETH") {
            cantidadEth = parseFloat(prompt("ingrese cantidad de de ETH"));
            ingresoBrutoDolar = cotizacionDiaria * cantidadEth;
            /* D) Sabiendo que el coste de electricidad para:
            BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD. */
            costeElectricidad = ingresoBrutoDolar * 0.04;
            ingresoTotalNetoDolar = (ingresoBrutoDolar - costeElectricidad);// en dolar
            //E) Convertir el ingreso neto en ARS solo para ETH.
            ingresoTotalNetoPesos = ingresoTotalNetoDolar * 337;

            //A) Nombre y cantidad de la criptomoneda más minada.
            if (flagCant == 0 || (cantidadEth > cantidadBtc)) {
                acumulador += cantidadEth;///nota= acumulador(suma) es distinto a contador ++ referido a i.
                cantidadDeLaMonedaMinada = acumulador;
                nombreDeLaMonedaMasMinada = nombreDeLaMoneda;//Cantidad de ETH o ETH minado ese día - Número positivo.
                flagCant = 1;
            }
        }

        //////B) Nombre de la criptomoneda que mayor cotización tuvo.
        if (flagCotizacionMoneda == 0 || cotizacionDiaria > contizacionaActual) {
            contizacionaActual = cotizacionDiaria;
            nombreDeLaMonedaMayorCotizacion = nombreDeLaMoneda;
            flagCotizacionMoneda = 1;
        }

        seguir = prompt("indique  SI , si desea seguir ingresando mas monedas").toLowerCase();

    }
    while (seguir == "si");

    if (ingresoTotalNetoPesos > 100000) {//en pesos ARS
        afip = ingresoTotalNetoPesos * 0.21;
        mensaje = ("El ingreso neto por ETH es de $ " + ingresoTotalNetoPesos + " en pesos, y se descontó $ " + afip + " pesos de AFIP.");
        alert(mensaje);
    }

}
/* 
E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337.
Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
"El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".
Siendo .X1 el neto en ARS y X2 el impuesto aplicado.
*/