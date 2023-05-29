console.log(':::IF:::')
//Verifica se a nota está entre [9, 10](Intervalo fechado)
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const draw = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Dentro')
    }else{
        console.log('Fora')
    }
}
draw(8)

//--------------------------------------------------------

console.log(':::SWITCH:::')
//Verifica se a nota está entre [9, 10](Intervalo fechado)
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
            console.log('10')
            break
        case 9:
            console.log('9')
        case 8:
            console.log('8')
            break
        case 7:
            console.log('7')
            break
        case 6:
            console.log('6')
            break
        case 5:
            console.log('5')
            break
        case 4:
            console.log('4')
            break
        case 3:
            console.log('3')
            break
        case 2:
            console.log('2')
            break
        case 1:
            console.log('1')
            break
        case 0:    
            console.log('0')
            break
        default:
            console.log('Entrada inválida')
    }
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(5)
imprimirResultado(4)
imprimirResultado(3)
imprimirResultado(2)
imprimirResultado(1)
imprimirResultado(0)
imprimirResultado(-1)

