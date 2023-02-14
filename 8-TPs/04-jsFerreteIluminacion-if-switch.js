
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {


    let cantidadDeLamparas;
    let precioNeto;
    let precioFinal;
    let marcaDeLampara;
    let descuento = 0;
    let impuesto;

    let precioIngresosBrutos;

    PRECIO_lAMPARA = 35;
    marcaDeLampara = document.getElementById("Marca").value;
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);

    precioNeto = cantidadDeLamparas * PRECIO_lAMPARA;

    if (cantidadDeLamparas > 5) {
        descuento = 0.5;
    }
    switch (marcaDeLampara) {
        case "ArgentinaLuz":
            descuento = 0.4;
        default:
            descuento = 0.3;
            break;
    }
    if (cantidadDeLamparas == 4) {
        switch (marcaDeLampara) {
            case "ArgentinaLuz":
            case "FelipeLuz":
                descuento = 0.25;
                break;
            default:
                descuento = 0.2;
                break;
        }
    }
    if (cantidadDeLamparas == 3) {
        switch (marcaDeLampara) {
            case "ArgentinaLuz":
                descuento = 0.15;
            case "FelipeLuz":
                descuento = 0.10;
            default:
                descuento = 0.05;
                break;

        }
    }

    descuento = precioNeto * descuento;
    precioFinal = precioNeto - descuento;

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if (precioFinal > 120) {
        impuesto = precioNeto * 0.1;
        precioIngresosBrutos = precioFinal + impuesto;
        alert(`Usted pago $ ${precioIngresosBrutos.toFixed(2)}de IIBB.”, siendo $ ${impuesto.toFixed(2)} el impuesto que se pagó. `);
    }
}

