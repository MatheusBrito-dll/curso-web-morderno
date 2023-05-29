// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
//--------------------------------É extensível?---------
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)
/**
 * Resumo do Object.preventExtensions, ele priva o objeto
 * de novas expansoes, mas você pode excluir normalmente e
 * alterar os atributos ja existentes, só não pode criar mais
 * atributos dentro desse OBJ.
 */
//===========================================================

// Object.seal
const pessoa = Object.seal({ 
    nome: 'Juliana', idade: 35
})
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)
/**
 * Resumo de Object.seal, você não vai poder adicionar
 * nem deletar os atributos, somente modificar os atributos
 * ja existentes no objeto.
 */

//Object.freeze = selado + valores constantes
const carro = Object.freeze({
    cor: 'preto'
})

carro.cor = 'azul'
carro.motor = 1.0
delete carro.cor
console.log(Object.isFrozen(carro))
console.log(carro)
