// Usando a notação literal
const obj1 = {}


// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object


//Funções consrutoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
console.log(p1.getPrecoComDesconto())


//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30 * (30 - faltas))
        }
    }
}
const f1 = criarFuncionario('Jõao', 7900, 4)
console.log(f1.getSalario())


// Object.creat
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha.nome)


//Uma função que retorna um Objeto... 
const fromJSON = JSON.parse('{"info": "Sou um JSON "}')
console.log(fromJSON.info)