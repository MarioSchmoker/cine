let cantidadAsientos: number = Number(
  prompt(`Ingrese la cantidad de Asientos: `)
);
let asientos: number[] = new Array(cantidadAsientos);
let indice: number = 0;
let totalVacias: number = 0;
let totalOcupadas: number = 0;
let vacias: boolean = true; //1
let ocupadas: boolean = false; //0

function isEmptySeat(
  vacias: boolean = true,
  ocupadas: boolean = false
): number {
  return Math.floor(Math.random() * 10);
}

for (indice = 0; indice < cantidadAsientos; indice++) {
  asientos[indice] = isEmptySeat(true, false);

  if (true) {
    totalOcupadas += 1;
  } else if (false) {
    totalVacias += 1;
  }
}
console.log("Butacas vacias : ", totalVacias);
console.log("Butacas ocupadas : ", totalOcupadas);
