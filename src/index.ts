let cantidadAsientos: number = Number(
  prompt(`Ingrese la cantidad de Asientos: `)
);
let ArrayAsientos: boolean[] = new Array(cantidadAsientos);
let indice: number;
let totalVacias: number = 0;
let totalOcupadas: number = 0;
let vAsientos: number;

function cargarArregloButacas(vAsientos: number, cantidadAsientos: number) {
  for (indice = 0; indice < cantidadAsientos; indice++) {
    vAsientos[indice] = Math.random() < 0.5;
  }
  return vAsientos;
}

console.log(cargarArregloButacas(ArrayAsientos, cantidadAsientos));

for (indice = 0; indice < cantidadAsientos; indice++) {
  if (ArrayAsientos[indice] == true) {
    totalOcupadas += 1;
  } else totalVacias += 1;
}
console.log("Butacas ocupadas : ", totalOcupadas);
console.log("Butacas vacias : ", totalVacias);
