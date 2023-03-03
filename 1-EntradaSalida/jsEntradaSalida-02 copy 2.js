/******************************************************************************

Ejercicio 2

De 5 representantes de atención al cliente que pertenecen a un call center se deben tomar y validar los
siguientes datos.
A. Nombre.
B. Legajo (numero de 4 dígitos, sin ceros a la izquierda)
C. Cantidad de llamadas atendidas (entre 1 y 60)
D. Tiempo total de conversación en hs (entre 1 y 5)
E. Especialidad (Telefonica, RRSS, WhatsApp)



Informar:
1. El total de llamadas atendidas de los representantes
2. El nombre del representante que mas llamados atendió de manera Telefonica.
3. El nombre del representante que menos tiempo converso de WhatsApp.
4. El promedio de conversación del grupo. Ej de calculo: totalConversado/totalLlamadasAtendidas

Pedir datos por prompt y mostrar por document write o alert.


*******************************************************************************/



function mostrar()
{
  let nombre;
  let legajo;
  let cantLlamadasAtend;
  let tiempoDeConv;
  let especialidad;
  let acumuladorLlamadasAtend = 0;
  let masAtendio;
  let masAtendioNombre;
  let menosConverso;
  let menosConversoNombre;
  let promedioConvGrupo;
  let acumuladorTiempoConv = 0;
  let flagMenosConverso = true;
  let flagMasAtendio = true;


  for (let index = 0; index <5; index++) {
    
    nombre = prompt("ingrese nombre");

		legajo = prompt("ingrese legajo numero de 4 dígitos, sin ceros a la izquierda");
		legajo = parseInt(legajo);

		while (legajo < 1000 || legajo > 9999) {
      legajo = prompt("ingrese legajo numero de 4 dígitos, sin ceros a la izquierda ");
      legajo = parseInt(legajo);
		}

    cantLlamadasAtend = prompt("ingrese cant de llamadas 1 a 60");
		cantLlamadasAtend = parseInt(cantLlamadasAtend);

		while (cantLlamadasAtend < 1 || cantLlamadasAtend > 60) {
      cantLlamadasAtend = prompt("ingrese cant de llamadas 1 a 60");
      cantLlamadasAtend = parseInt(cantLlamadasAtend);
		}

    tiempoDeConv = prompt("ingrese tiempo de conversacion 1 a 5 hs");
		tiempoDeConv = parseInt(tiempoDeConv);

		while (tiempoDeConv < 1 || tiempoDeConv > 5) {
      tiempoDeConv = prompt("Re ingrese tiempo de conversacion 1 a 5 hs");
      tiempoDeConv = parseInt(tiempoDeConv);
		}

    especialidad = prompt("ingrese especialidad en minusculas telefonica, RRSS en mayusculas, whatsapp");

    while (especialidad != "telefonica" && especialidad != "RRSS" && especialidad != "whatsapp") {
      especialidad = prompt("ingrese especialidad en minusculas telefonica, RRSS en mayusculas, whatsapp");

    }


    acumuladorLlamadasAtend = cantLlamadasAtend + acumuladorLlamadasAtend;
    acumuladorTiempoConv = tiempoDeConv + acumuladorTiempoConv;
    if(especialidad == "telefonica")
    {
      if(flagMasAtendio == true || masAtendio > cantLlamadasAtend )
     {
      masAtendio = cantLlamadasAtend;
      masAtendioNombre = nombre;
      flagMasAtendio = false;
     }
    }
    else
    {
      if (especialidad == "whatsapp")
      {
        if(flagMenosConverso == true || tiempoDeConv < menosConverso )
        {
         menosConverso = tiempoDeConv;
         menosConversoNombre = nombre;
         flagMenosConverso = false;

        }
      }
   }

  }

    promedioConvGrupo = acumuladorTiempoConv / acumuladorLlamadasAtend;
    
  document.write("el total de llamadas es: "+ acumuladorLlamadasAtend+"<br>");
  document.write("el que mas hablo por telefono es: "+ masAtendioNombre+"<br>");
  document.write("el que menos hablo por whatsapp es: "+ menosConversoNombre+"<br>");
  document.write("el promedio en hs del grupo es "+ promedioConvGrupo+"<br>");

}

