function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4000,
    desc: 0.50,
    getPreco
}
console.log(produto.getPreco())

const carro = {preco: 5000, desc: 0.50}

// contexto e parametros
console.log(getPreco.call(carro, 0.9, '$'))
// contexto e parametros em arrays
console.log(getPreco.apply(carro, [0.17, '$']))
