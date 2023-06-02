const instanciaUnicaA = require('./instanciaUnica')
const instanciaUnicaB = require('./instanciaUnica')
const instanciaNovaA = require('./instanciaNova')()
const instanciaNovaB = require('./instanciaNova')()
//Valor quardado em CACHE, quando ele não retorna um objeto ele não cria novas instancias!
instanciaUnicaA.inc()
instanciaUnicaA.inc()
console.log(instanciaUnicaA.valor, instanciaUnicaB.valor)

//Quando ele retorna o Objeto com a factory ele sempre cria novas instancias
instanciaNovaA.inc()
instanciaNovaA.inc()
console.log(instanciaNovaA.valor, instanciaNovaB.valor)