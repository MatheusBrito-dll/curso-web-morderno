const carrinho = [
    '{"nome01": "Borracha01", "preco": 3.45}',
    '{"nome02": "Borracha02", "preco": 5.65}',
    '{"nome03": "Borracha03", "preco": 2.67}',
    '{"nome04": "Borracha04", "preco": 1.22}'
]

// JSON para OBJETO
const paraObjeto = json1 => JSON.parse(json1)

// o PRIMEIRO map retorna um array com 4 objetos já o SEGUNDO map
// retorna um array com 4 valores.
// o map percorre cada objeto dentro do array e retorna `produto`.`preco` do
// objeto em que ele esta posicionado. 
const resultado = carrinho.map(paraObjeto).map(produto => produto.preco)
console.log(resultado)


// TESTE APENAS
const carrinho1 = [
    '{"nome": "Borracha01", "preco": 3.45}'
]

console.log(JSON.parse(JSON.stringify(JSON.parse(carrinho1))))

