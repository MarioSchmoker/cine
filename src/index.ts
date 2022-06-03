let cantidadAsientos : number = Number(prompt(`Ingrese la cantidad de Asientos: `));
let asientos : number[] = new Array (cantidadAsientos);
let indice : number = 0 ;
let totalVacias : number = 0;
let totalOcupadas : number = 0;
let vacias : number = true //1
let ocupadas : number = false; //0

function isEmptySeat(vacias: boolean = true , ocupadas: boolean = false ) : number {
   return Math.floor(Math.random()*100);
}
  
for (indice = 0; indice < cantidadAsientos ; indice++) {
      
      asientos[indice] = isEmptySeat(true,false)  
  
        if (true){
            totalVacias += vacias
        } else (false){
             totalOcupadas += ocupadas
          };
}
