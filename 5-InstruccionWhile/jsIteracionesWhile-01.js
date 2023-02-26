/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/



function mostrar() {
	let i = 1;
	while (i < 11) {    //se puede poner <=11
		console.log(i);// (si lo pongo antes mod la var de control antes de mostrarlo, no tiene sentido)
		i++;
	}
}