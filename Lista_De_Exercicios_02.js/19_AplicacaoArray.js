/*
1:
{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}

2:
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
*/

function depesasTotais(itens){ 
    let total = 0
    for (let item of itens)
        total += item.preco
    
    return total
}
console.log(depesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))


function depesasTotais2(itens) {
    return itens.map(item => item.preco).reduce((acumulador, valorAtual) => acumulador + valorAtual)
}


console.log(depesasTotais2([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))

let array_reduce = [1, 1, 1, 1, 1]

console.log(array_reduce.reduce((valorAcumulado, itemAtual) => valorAcumulado + itemAtual))