/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.").toLowerCase(); //reduce a minuscula

	while (!(claveIngresada=="utn750")){	
	claveIngresada=prompt("contraseña incorrecta, vuelva a intentar")// "ayuda: es utn750";
	}
	alert ("clave correcta!");
	
}//FIN DE LA FUNCIÓN
