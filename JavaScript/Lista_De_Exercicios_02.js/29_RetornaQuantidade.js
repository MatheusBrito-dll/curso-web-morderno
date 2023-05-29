function numeros1(array1, casas){
    let novoArray = []
    for (i in array1) {
        if(array1[i].toString().length === casas)
        novoArray.push(array1[i])
    }
    return novoArray
}

console.log(numeros1([2, 3, 44, 122, 1, 2222, 22, 55, 1], 1))
console.log(numeros1([2, 3, 44, 122, 1, 2222, 22, 55, 1], 2))
console.log(numeros1([2, 3, 44, 122, 1, 2222, 22, 55, 1], 3))
console.log(numeros1([2, 3, 44, 122, 1, 2222, 22, 55, 1], 4))
