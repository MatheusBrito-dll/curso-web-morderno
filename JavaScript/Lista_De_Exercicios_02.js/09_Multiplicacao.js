//Multiplicação sem o operador "*"
function multiplicacao(x, y) {
    let resultado = 0
    for(i = 0; i < y; i++) {
        resultado += x
    }
    return console.log(resultado)
}
multiplicacao(9, 2)

function multiplicar(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0
    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
}
console.log(multiplicar(9, 9))

//nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
function multiplicar(numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) return 0
    
    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)
    
    function multiplicarRecursivamente(numero, multiplicador) {
        return (
            multiplicador === 1 ?
            numero :
            numero + multiplicarRecursivamente(numero, multiplicador-1)
        )}
    
        return multiplicarRecursivamente(maiorNumero, menorNumero )
}


    