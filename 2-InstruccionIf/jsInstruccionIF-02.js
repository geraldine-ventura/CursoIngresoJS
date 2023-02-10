//Al ingresar una edad debemos informar solo si la persona es mayor de edad

function mostrar()
{
	//tomo la edad 
	let edad;
	edad= (document.getElementById("txtIdEdad").value) ;
	edad= parseInt(edad);

	if(edad >= 18) {
	  alert("La persona ingresada es mayor de edad");

	}
	  alert("salí del ciclo if");
	

}//FIN DE LA FUNCIÓN