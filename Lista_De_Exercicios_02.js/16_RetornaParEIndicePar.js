function parArray(array){
    const array2 = []
    for (i in array){
        if ((i % 2 === 0) && (array[i] % 2 === 0)) {array2.push(array[i])}}
    return array2
}
console.log(parArray([1, 2, 5, 6, 8, 10, 4]))


