function mostrar() {
  let producto;
  let cantidadDeBolsas=0;
  let precioPorBolsas;
  let importeTotalBruto;
  let importeTotalFinal;
  let descuento=0;

  producto = prompt("ingrese producto para validad 1-arena, 2-cal, 3-cemento");
  cantidadDeBolsas=parseInt(prompt("ingrese cant de bolsas")) ;
  switch (producto) {
    case 1:
      producto = "arena";
    case 2:
      producto = "cal";
    case 3:
      producto = "cemento";
      importeTotalBruto= cantidadDeBolsas* precioPorBolsas;
      break;
      default:
  }
if(cantidadDeBolsas>9){
descuento= importeTotalBruto*0.15;
}
else if(cantidadDeBolsas>29){
  descuento= importeTotalBruto*0.25;
}
else{
  descuento=0;
}
}
