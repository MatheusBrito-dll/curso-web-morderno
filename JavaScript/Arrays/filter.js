const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Celular', preco: 1999, fragil: true},
    {nome: 'Cadeira', preco: 799, fragil: false},
    {nome: 'Máquina fotográfica', preco: 2999, fragil: true},
    {nome: 'Livro', preco: 49, fragil: false},
    {nome: 'Vaso de cristal', preco: 299, fragil: true},
    {nome: 'Televisão', preco: 3999, fragil: true},
    {nome: 'Garrafa de vinho', preco: 89, fragil: true}
]

console.log(produtos.filter(function(p) {
    if (p.fragil == false){
        return true
    }else{
        return false
    }
}))

console.log(produtos.filter(function(p) {
    return p.fragil == true
}))

