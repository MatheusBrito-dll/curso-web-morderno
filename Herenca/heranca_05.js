// Os três ão retornar `function`
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Podemos adicionar funções a `String` usando
//o prototype, como no exemplo abaixo, ja que `String`
//não vem com o método de reverter o texto dentro de sua API
String.prototype.reverse01 = function () {
    return this.split('').reverse().join('')
}
//`Matheus` é um literal criado dentro de `String`
//e por isso é capaz de acessar o método `reverse01` dentro
//do prótotipo de `String` 
console.log('Matheus'.reverse01())
//Saida -> { reverse01: [Function (anonymous)] }
console.log(String.prototype)

//Outro exemplo com `Array`
Array.prototype.pegaPrimeiroElemento = function() {
    return this[0]
}
console.log(['primeiro', 'segundo', 'terceiro'].pegaPrimeiroElemento())

