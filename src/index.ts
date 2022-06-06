let cantidadAsientos: number = Number(
  prompt(`Ingrese la cantidad de Asientos: `)
);
let arrayAsientos: boolean[] = new Array(cantidadAsientos);
let indice: number;
let totalVacias: number = 0;
let totalOcupadas: number = 0;

function cargarArregloButacas(arrayAsientos: boolean[], cantidadAsientos: number) {
  for (indice = 0; indice < cantidadAsientos; indice++) {
    arrayAsientos[indice] = Boolean(Math.floor(Math.random()*2));
  }
  return arrayAsientos;
}

//ojo, cuando ejecutas un console.log, ejecutas lo de adentro es decir que en tu code despues de cargar las variables
//empieza a ejecutarse aca

console.log(cargarArregloButacas(arrayAsientos, cantidadAsientos));

for (indice = 0; indice < cantidadAsientos; indice++) {
  if (arrayAsientos[indice] === true) {
    totalOcupadas += 1;
  } else totalVacias += 1;
}
console.log("Butacas ocupadas : ", totalOcupadas);
console.log("Butacas vacias : ", totalVacias);
