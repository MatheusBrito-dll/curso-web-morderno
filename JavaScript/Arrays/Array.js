/**
 * Alguns métodos em Array!
 * Podemos estanciar um array com o método NEW
 * Como é mostrado na linha 20.
 * Também podemos atribuir novos valores ao ARRAY com o []
 * como é mostrado na linha 24.
 * Com o método PUSH podemos adicionar valores ao final
 * do array como é mostrado na linha 28.
 * Com o método SORT podemos colocar os valores do array em ordem
 * como é mostrado na linha 35.
 * Com o delete podemos apagar valores da do array, mas no lugar do valor
 * ele ficara um valor `empty item` ou undefined como é mostrado na linha 38.
 *  
 * 
 */

console.log(typeof Array, "-", typeof new Array, "-", typeof [])


let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados)

aprovados.push('Paulo')

console.log("O array tem", aprovados.length, "prosições.")

aprovados[9] = "Carlos"
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana', '1', '5', '9']

/**
 * O método splice ele substitui e atribui novos valores.
 * O método abaixo temos o primeiro parametro que tem o valor 1,
 * ele ira apagar o valor de index[1] = Carlos e partir da posição
 * index[1] que é passado no segundo parametro ele ira colocar os
 * valores passados.
 *  Antes -> ['Bia', 'Carlos', 'Ana']
 * Depois -> [ 'Bia', 'Um', 'Dois', 'Ana' ]
 * Caso não tivesse parametros de valores ele só iria remover o `Carlos`
 * da lista.
 */
aprovados.splice(1, 1, 'Um', 'Dois')

console.log(aprovados)