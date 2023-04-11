// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa 456 -> {...}
/**
 * pessoa = {nome: 'Ana'}
 * Vai gerar um erro pois é uma atribuição 
 * para uma constante 
**/

//Objeto foi congelado 
Object.freeze(pessoa)
//Pode fazer atribuções ao obj, mas nada vai mudar
 