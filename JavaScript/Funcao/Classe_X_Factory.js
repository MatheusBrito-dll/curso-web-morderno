/**
 * Cria a classe pessoa com o construtor que
 * obriga as variaveis nome e idades serem prenchidas 
 * na criação do objeto.
 * Dentro dela tem o metodo `falar` 
 */
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

const pessoa2 = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
        
    }
}

const p2 = pessoa2('João')
p2.falar()

/**
 * Define a funcao anonima `pessoa3` que recebe o parametro `nome` e retorna
 * o objeto com um método `falar`. O método usa a INTERPOLAÇAO DE STRING
 * (template literal) para imprimir uma mensagem que inclui o nome passado como
 * parametreo na criação do objeto.
 */
const pessoa3 = function(nome){
    return {
        falar: function() {
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const p3 = pessoa3('Joao')
p3.falar()

