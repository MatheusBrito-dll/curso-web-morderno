function retornaArray(repete, vezes){
    arrayR = []
    for (i = 0; i <= vezes; i++) arrayR.push(repete)
    return arrayR
}
console.log(retornaArray('Matheus', 10))
///////////////////////////////////////////////////////

function retornaArray1(repete, vezes) {
    return Array(vezes + 1).fill(repete)
}

console.log(retornaArray('Compacto', 5))
  