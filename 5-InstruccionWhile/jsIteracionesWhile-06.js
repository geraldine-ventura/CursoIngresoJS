//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

function mostrar(){   

	
	let contador=0;
	let acumulador=0;
    let numeroIngresado;
	while (contador<5){
		numeroIngresado=parseFloat(prompt("ingrese 5 numeros"));
		acumulador+=numeroIngresado;
		console.log(contador++);
	}
	document.getElementById("txtIdSuma").value=acumulador ;
	document.getElementById("txtIdPromedio").value=acumulador/5 ;
	
}//FIN DE LA FUNCIÓN