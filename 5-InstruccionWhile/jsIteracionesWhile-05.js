/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .").toLowerCase();

	while (sexoIngresado != "f" && sexoIngresado != "m"){
		sexoIngresado = prompt("ingrese f ó m .");
	}

	if(sexoIngresado=="f")
		alert("femenino")
	else
		alert("masculino")
	}//FIN DE LA FUNCIÓNdocument.getElementById(txtIdSexo).value= sexoIngresado; 
