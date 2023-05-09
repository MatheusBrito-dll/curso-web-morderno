function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo == false){
        if (numero > minimo && numero < maximo) {
            return true 
        }else {
            return false
        }
    }else {
        if (numero >= minimo && numero <= maximo) {
            return true 
        }else {
            return false
        }
    }
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))

//Codigo menor
function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
    }