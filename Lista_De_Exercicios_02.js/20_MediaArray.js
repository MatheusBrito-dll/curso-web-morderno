function retornaMedia(arrayM){
    return arrayM.reduce((acumulador, atual) => acumulador + atual) / arrayM.length
}

console.log(retornaMedia([0, 10]))