// Factory Simples
function CriarPessoa() {
    // Retorna um objeto
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

function CriarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(CriarProduto('Notebook', 4989.47))
console.log(CriarProduto('Bateria', 256.09))
console.log(CriarProduto('Tinta', 12.8))