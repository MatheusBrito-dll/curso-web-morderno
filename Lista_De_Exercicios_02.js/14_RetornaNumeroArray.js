function retornaNumeor(array){
    return array.filter(x => typeof x == "number")
}

console.log(retornaNumeor([1, "d", 3, {}, 9, "g"]))

