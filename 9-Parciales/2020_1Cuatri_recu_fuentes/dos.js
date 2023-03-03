function mostrar() {
  let producto;
  let cantidadDeBolsas = 0;
  let precioPorBolsas;
  let importeTotalBruto;
  let importeTotalFinal;
  let descuento = 0;
  let cantidadMax;
  let flag = 0;

  producto = prompt("ingrese producto para validad 1-arena, 2-cal, 3-cemento");
  cantidadDeBolsas = parseInt(prompt("ingrese cant de bolsas"));
  switch (producto) {
    case 1:
      producto = "arena";
    case 2:
      producto = "cal";
    case 3:
      producto = "cemento";
      importeTotalBruto = cantidadDeBolsas * precioPorBolsas;
      break;
    default:

  }
  if (cantidadDeBolsas > 9) {
    descuento = importeTotalBruto * 0.15;
  }
  else if (cantidadDeBolsas > 29) {
    descuento = importeTotalBruto * 0.25;
  }

}
while (flag == 0 & cantidadDeBolsas > cantidadMax) {

  producto =
    flag = 1;
}
importeTotalFinal=importeTotalBruto+descuento;

switch(producto){
  
}


