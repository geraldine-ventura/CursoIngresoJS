/* Enunciado 2


En una veterinaria se están realizando censos para evaluar los animales 
ingresados por día. 
Por este motivo, se le realizará una consulta al menos 6 clientes.

Se requieren los siguientes datos:
Tamaño de la mascota (Chica, Mediana o Grande).
Sexo de la mascota (Hembra o Macho).
Tipo de mascota (Gato, Perro, Otro).
Edad de la mascota. Validar.
Está vacunado? SI/NO (Se puede utilizar boolean si se desea).
INFORMAR


A- Cuál es el tipo, el sexo y la edad de la mascota más joven entre los tamaños medianos o grandes.
B- Cuál es el promedio de edad de los PERROS.
C- Cuál es el tipo de mascota más vacunado. */

function mostrar() {
    //declaro variables
    let tamaño;
    let sexo;
    let tipo;
    let edad;//validar
    let vacunado = true; //informar


    let i = 0;//clientes ingreso
    let flagMasJoven = false;
    let mascotaMasJovenEdad;
    let mascotaMasJovenSexo;
    let mascotaMasJovenTipo;
    let contadorVacunadoGato = 0;
    let contadorVacunadoPerros = 0;
    let contadorVacunadoOtros = 0;
    let respuesta;
    let tipoMasVacunado;
    let totalEdadPerros = 0;
    let promedioEdadPerros;
    let contadorEdadPerros = 0;





    // ciclo do while para consultas>=6, al menos 6
    do {

        do {
            tamaño = prompt("Ingrese Tamaño de la mascota (Chica, Mediano o Grande): ").toLowerCase();
        }
        while (tamaño != "chica" && tamaño != "mediano" && tamaño != "grande");


        do {
            sexo = prompt("Ingrese Sexo de la mascota (Hembra o Macho).: ").toLowerCase();
        }
        while (sexo != "hembra" && sexo != "macho");


        do {
            tipo = prompt("Ingrese Tipo de mascota (Gato, Perro, Otro) ").toLowerCase();
        }
        while (tipo != "gato" && tipo != "perro" && tipo != "otro");


        do {
            edad = parseInt(prompt("Ingrese Edad de la mascota: "));//validar
        }
        while (isNaN(edad));


        /*       do {
                  vacunado = prompt("Ingrese vacunado: si o no").toLowerCase();
              } while ((vacunado != "si" && vacunado != "no")); */

        vacunado = prompt("Está vacunado ? SI / NO ").toLowerCase();

        if (vacunado) {
            vacunado == "si";//informar;
        }
        else
            vacunado == "no";


        //A - Cuál es el tipo, el sexo y la edad de la mascota más joven entre los tamaños medianos o grandes.
        if (tamaño == "mediana" || tamaño == "grande") {

            if (flagMasJoven == false || mascotaMasJovenEdad < edad) {

                mascotaMasJovenEdad = edad;
                mascotaMasJovenSexo = sexo;
                mascotaMasJovenTipo = tipo;

                flagMasJoven = true;
            }

        }

        //C- Cuál es el tipo de mascota más vacunado.
        switch (tipo) {
            case "gato":
                if (vacunado == "si") {
                    contadorVacunadoGato++;
                }
                break;

            case "perro":

                if (vacunado == "si") {
                    contadorVacunadoPerros++;
                }
                contadorEdadPerros++
                totalEdadPerros += edad;
                break;

            case "otro":
                if (vacunado == "si") {
                    contadorVacunadoOtros++;

                }
            default:
                break;

        }

        if (contadorVacunadoPerros > contadorVacunadoGato && contadorVacunadoPerros > contadorVacunadoOtros) {
            tipoMasVacunado = "perros";

        } else if (contadorVacunadoOtros > contadorVacunadoPerros && contadorVacunadoOtros >= contadorVacunadoGato) {
            tipoMasVacunado = "otros";//ver cond :/

        } else {
            tipoMasVacunado = " gato"
        }

        i++;

        respuesta = prompt("¿Desea ingresar otro dato si/no?");

    }
    while (respuesta == "si" || i < 2);

    //B- Cuál es el promedio de edad de los PERROS.
    if (contadorEdadPerros > 0) {

        promedioEdadPerros = totalEdadPerros / contadorEdadPerros;
    } else {
        promedioEdadPerros = "no se ingresaron perros para calcular ";
    }

    console.log("A- La mascota más joven entre los tamaños medianos o grandes es: Tipo:", mascotaMasJovenTipo, "Sexo:", mascotaMasJovenSexo, "Edad:", mascotaMasJovenEdad);
    console.log("B- El promedio de edad de los PERROS es:", promedioEdadPerros);
    console.log("C- El tipo de mascota más vacunado es:", tipoMasVacunado);
}

///////

/*
Valverde Cristian
Enunciado 2

En una veterinaria se están realizando censos para evaluar los animales ingresados
por día. Por este motivo, se le realizará una consulta al menos 6 clientes.

Se requieren los siguientes datos:
Tamaño de la mascota (Chica, Mediana o Grande).
Sexo de la mascota (Hembra o Macho).
Tipo de mascota (Gato, Perro, Otro).
Edad de la mascota. Validar.
Está vacunado? SI/NO (Se puede utilizar boolean si se desea).
INFORMAR


A- Cuál es el tipo, el sexo y la edad de la mascota más joven entre los tamaños medianos o grandes.
B- Cuál es el promedio de edad de los PERROS.
C- Cuál es el tipo de mascota más vacunado.

*/

/* function mostrar() {

    var contador;
    var respuesta = "si"
    var tamañoDeMascota;
    var sexoDeMascota;
    var tipoDeMascota;
    var edadDeMascota;
    var vacunado;
    var flagMasJoven;
    var mascotaMasJovenEdad;
    var mascotaMasJovenSexo;
    var mascotaMasJovenTipo;
    var contadorDePerros;
    var sumaEdadesPerros;
    var promedioEdadPerros;
    var vacunadosPerros;
    var vacunadosGatos;
    var vacunadosOtros;
    var tipoMasVacunado;

    contador = 0;
    flagMasJoven = false;
    contadorDePerros = 0;
    vacunadosPerros = 0;
    vacunadosGatos = 0;
    vacunadosOtros = 0;

    do {

        do {
            tamañoDeMascota = prompt("Ingrese tamañoDeMascota: Chica, Mediana o Grande").toLowerCase();
        } while (!isNaN(tamañoDeMascota) || (tamañoDeMascota != "chica" && tamañoDeMascota != "mediana" && tamañoDeMascota != "grande"));

        do {
            sexoDeMascota = prompt("Ingrese sexoDeMascota: Hembra o Macho").toLowerCase();
        } while (!isNaN(sexoDeMascota) || (sexoDeMascota != "hembra" && sexoDeMascota != "macho"));

        do {
            tipoDeMascota = prompt("Ingrese tipoDeMascota: Gato, Perro, Otro").toLowerCase();
        } while (!isNaN(tipoDeMascota) || (tipoDeMascota != "gato" && tipoDeMascota != "perro" && tipoDeMascota != "otro"));

        do {
            edadDeMascota = prompt("Ingrese edadDeMascota:");
            edadDeMascota = parseInt(edadDeMascota);
        } while (isNaN(edadDeMascota) || edadDeMascota < 0);

        do {
            vacunado = prompt("Ingrese vacunado: si o no").toLowerCase();
        } while (!isNaN(vacunado) || (vacunado != "si" && vacunado != "no"));

        //A- Cuál es el tipo, el sexo y la edad de la mascota más joven entre los tamaños medianos o grandes.
        if (tamañoDeMascota == "mediana" && tamañoDeMascota == "grande") {
            if (flagMasJoven == false) {
                mascotaMasJovenEdad = edadDeMascota;
                mascotaMasJovenSexo = sexoDeMascota;
                mascotaMasJovenTipo = tipoDeMascota;

                flagMasJoven = true;
            } else {
                if (numeroIngresado < minimo) {
                    mascotaMasJovenEdad = edadDeMascota;
                    mascotaMasJovenSexo = sexoDeMascota;
                    mascotaMasJovenTipo = tipoDeMascota;
                }
            }
        }

        //C- Cuál es el tipo de mascota más vacunado.
        switch (tipoDeMascota) {
            case "gato":
                if (vacunado == "si") {
                    vacunadosGatos++;
                }
                break;

            case "perro":
                sumaEdadesPerros += edadDeMascota;
                contadorDePerros++;

                if (vacunado == "si") {
                    vacunadosPerros++;
                }
                break;

            case "otro":
                if (vacunado == "si") {
                    vacunadosOtros++;
                }
                break;
        }

        if (vacunadosPerros > vacunadosGatos && vacunadosPerros > vacunadosOtros) {
            tipoMasVacunado = "perros";
        }
        else {
            if (vacunadosGatos > vacunadosOtros) {
                tipoMasVacunado = "gatos";
            }
            else {
                tipoMasVacunado = "otros";
            }
        }


        contador++;
        respuesta = prompt("¿Desea ingresar otro dato?");

    } while (respuesta == "si" || contador < 6);

    //B- Cuál es el promedio de edad de los PERROS.
    if (contador > 0) {
        promedioEdadPerros = sumaEdadesPerros / contadorDePerros;
    } else {
        promedioEdadPerros = "no se pudo calcular";
    }




    document.write("A-la edad de la mascota más joven entre los tamaños medianos o grandes.: " + mascotaMasJovenEdad + " sexo: " + mascotaMasJovenSexo + " tipo: " + mascotaMasJovenTipo);
    document.write("B- Cuál es el promedio de edad de los PERROS.: " + promedioEdadPerros);
    document.write("C- Cuál es el tipo de mascota más vacunado.: " + tipoMasVacunado);


} //FIN DE LA FUNCIÓN */



