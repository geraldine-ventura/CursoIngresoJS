/*Al ingresar una edad menor a 18 años y 
					un estado civil distinto a "Soltero", 
					mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */
				

function mostrar()
{
	let edad;
	let estado;
	 edad= parseInt(document.getElementById("txtIdEdad").value);
	 estado= document.getElementById("estadoCivil").value;

	 if(edad<18 && estado!="Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	 }

	
	


}//FIN DE LA FUNCIÓN