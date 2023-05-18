function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join(', ')
}
console.log(simboloMais(5))

function simboloMais(quantidade) {
    return "+".repeat(quantidade)
}
console.log(simboloMais(2))
