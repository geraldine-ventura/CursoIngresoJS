function mostrar()
{
   let edad;
   edad=parseInt(document.getElementById("txtIdEdad").value);
   if (edad<=12 || edad >=18){
     alert(" NO es adolecente!");
   }

}//FIN DE LA FUNCIÓN