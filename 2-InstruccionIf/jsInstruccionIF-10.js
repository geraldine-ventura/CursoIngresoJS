
/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
let nota;
//let maximo=10;
//let minimo=1;
//numero= Math.round(Math.random()* (maximo-minimo) + minimo);
nota= Math.round(Math.random()* (9) + 1);
alert(nota);
if (nota<4){
	alert("Vamos, la proxima se puede");
}
else if (nota<9){
		alert("aprobo");
}
else {
		alert("exelente");
}
}

 

//FIN DE LA FUNCIÓN