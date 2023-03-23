const pessoa = {
    nome : 'Ana',
    idade: 5,
    endereco: {
        rua: 'abc',
        numero: 1000
    }
}

const {nome, idade} = pessoa

console.log(pessoa.nome, pessoa.idade, pessoa.endereco.rua,
            pessoa.endereco.numero)
console.log(nome, idade)

pessoa.nome = 'Joao'
//Mudar o valor no objeto e ver se muda nas variaveis que foram 
//amarradas!
console.log(pessoa.nome)
console.log(nome)
//REALMENTE É CRIADO OUTRA VARIAVEL DISTINTA DA ORIGINAL.