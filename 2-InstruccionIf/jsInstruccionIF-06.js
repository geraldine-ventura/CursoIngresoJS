function mostrar()
{
	
  let edad;
   edad=parseInt(document.getElementById("txtIdEdad").value);

    if( edad <13 ){
		alert("es niño");
	}
	else if (edad <18){
		alert("es adolecente");
	}
	    
	else if(edad <65){
		alert( "es adulto");
	}
	else{
		alert( "es anciano");	
	}
	
	
	
}//FIN DE LA FUNCIÓN