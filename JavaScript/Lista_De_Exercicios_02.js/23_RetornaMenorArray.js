function arrayMenor(arrayM){
    return arrayM.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}
console.log(arrayMenor([1, 2, 10, 5, 0, -11, 10, 100, 2, 1]))


function arrayMenor1(arrayM){
    return Math.min(...arrayM)
}

console.log(arrayMenor1([1, 2, 10, 5, 0, -11, 10, 100, 2, 1]))