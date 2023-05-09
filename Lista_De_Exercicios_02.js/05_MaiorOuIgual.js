function maiorOuIgual(x = 0, y = 0) {
    if (typeof(x) == "string" || typeof(y) == "string") {
        return false
    }
    if (x >= y){
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(0, 0), maiorOuIgual(0, "0"), maiorOuIgual(5, 1))

function maiorOuIgual2(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}

maiorOuIgual2(0, 0) // retornará true
maiorOuIgual2(0, "0") // retornará false
maiorOuIgual2(5, 1) // retornará true


    