/**
 * Crie uma função que recebe um número (de 1 a 12 e retorne o mês
 * correspondente como uma string. Por exemplo, se a entrada for 2,
 * a função deverá retornar "fevereiro", pois este é o 2° mês.
 */
function receberNomeDoMes(numero) {
    switch(numero) {
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Setembro')
            break
        case 10:
            console.log('Outubro')
            break
        case 11:
            console.log('Novembro')
            break
        case 12:
            console.log('Dezembro')
            break
        default:
            console.log('Entrada inválida')
    }
}

receberNomeDoMes(1) // retornará "janeiro"
receberNomeDoMes(4) // retornará "abril"
receberNomeDoMes(-1) // retornará "entrada inválida"

/**
 * O operador -- é usado para decrementar o valor da variável
 * numero em 1 antes de usá-la para acessar o índice do array mapeamento.
 * Por exemplo, se o valor de numero for 3, o operador -- irá decrementá-lo 
 * para 2, e então o valor 2 será usado para acessar o terceiro elemento do array mapeamento, 
 * que é o mês de março. Isso ocorre porque os índices em um array começam em 0, e não em 1.
 * O uso do operador -- dentro dos colchetes [ ] faz com que o valor de numero seja decrementado
 * antes de ser usado como índice no array mapeamento,
 * o que significa que o mês correspondente ao valor de numero será retornado.
 * @param {*} numero 
 * @returns 
 */
function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
    }
    

