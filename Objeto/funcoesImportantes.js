const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    //Ela vai ser listada?
    enumerable: true,
    //Ela pode ser alterada?
    writable: false,
    value: '01/01/2019'
})

console.log(pessoa)

/**
 * Object.assign ele atribui os atributos dos outros 
 * objetos no objeto que foi passado no primeiro
 * parametro
 */
const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 5}

// destino <-- o1, o2 a propiedade a de o2 sobrescreve o a de destino
const obj = Object.assign(destino, o1, o2)

console.log(obj)

//Congela o objeto e não tem como alterar mais
Object.freeze(obj)


