let cantidadAsientos: number = Number(
  prompt(`Ingrese la cantidad de Asientos: `)
);
let asientos: number[] = new Array(cantidadAsientos);
let indice: number = 0;
let totalVacias: number = 0;
let totalOcupadas: number = 0;
let ocupadas: boolean = true; //1
let vacias: boolean = false; //0

// paso a number
//let convp1 = integer.parseInt(ocupadas);
//let convp2 = integer.parseInt(vacias);

function isEmptySeat(ocupadas: boolean = true, vacias: boolean = false) {
  return Math.floor(Math.random() * 10);
}

for (indice = 0; indice < cantidadAsientos; indice++) {
  asientos[indice] = isEmptySeat(true, false);

  if (true) {
    totalOcupadas += 1;
  } else totalVacias += 1;
}
console.log("Butacas ocupadas : ", totalOcupadas);
console.log("Butacas vacias : ", totalVacias);
