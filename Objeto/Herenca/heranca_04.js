function MeuObjeto() {
    console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Teste txt ${this.nome}`)
}

obj1.nome = 'Rafael'
obj2.nome = 'Marcos'
console.log(obj1.nome)
console.log(obj2.nome)
console.log(MeuObjeto.nome)

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

console.log(MeuObjeto.prototype)

/**
 * ----RESUMO DA CONFUSÃO----
 * A função construtora `MeuObjeto` tem o Atributo unico `Prototype`
 * O mesmo aponta para `MeuObjeto.prototype` já o Objeto `MeuObjeto.prototype`
 * ele pode ter Atributos e o mesmo tem o seu próprio Prototype que aponta para
 * `Object.prototype` e o Prototype do mesmo aponta para `null`.
 * 
 * Vontando para a função construtora `MeuObjeto` ele tem também um prototype (não é o mesmo 
 * que o atributo `protype`) que aponta para `Function.prototype` e a mesma possui um `prototype`
 * que aponta para o mesmo `Object.protype` que o `MeuObject.prototype` aponta.
 * 
 * Por isso ao procurar atributos que o `obj1` não possui, ele vai procurar por herança em seus 
 * prototipos "pais".  
 */