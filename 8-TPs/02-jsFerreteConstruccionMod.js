/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let largo;
let ancho;
let perimetro;
let numeroDeVueltas;
let cantidadTotal;

largo= parseInt(document.getElementById("txtIdLargo").value) ;
ancho=parseInt(document.getElementById("txtIdAncho").value);
numeroDeVueltas=parseInt(document.getElementById("txtIdVueltas").value);
perimetro= (largo+ancho) *2;

cantidadTotal= numeroDeVueltas*perimetro;
alert(`La cant de alambre a comprar son ${cantidadTotal} metros`);

}

function Circulo () 
{
let radio;
let numeroDeVueltas;
let perimetro;
let cantidadTotal;
radio=parseInt(document.getElementById("txtIdaRadio").value);
largo= parseInt(document.getElementById("txtIdLargo").value) ;
numeroDeVueltas=parseInt(document.getElementById("txtIdVueltas").value);
perimetro= (3,14* radio*2);
cantidadTotal= perimetro*numeroDeVueltas;
alert(`La cantidad de alambre a comprar son ${cantidadTotal} metros`);

	
}
function Materiales () 
{
    
	let largo;
    let ancho;
    let sup2;
    let cemento;
    let cal;
    

    largo=parseInt(document.getElementById("txtIdLargo").value);
    ancho=parseInt(document.getElementById("txtIdAncho").value);

    sup2= largo* ancho;
    
    cemento= sup2*2;
    cal= sup2*3;
    alert(`para un terreno de ${sup2} m2, se necesitan ${cemento} bolsas de cemento y ${cal} bolsas de cal.`);


}