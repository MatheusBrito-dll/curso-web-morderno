function rand({min = 0, max = 10} = {}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 5, min: 0}

console.log(rand(obj))

const obj1 = {}

console.log(rand(obj1))

function rand1([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand1([50, 40]))
const people = {
    name: 'Etham',
    age: 18
}

const { name: nameOut } = people
console.log(nameOut)
console.log

function compras(trab1, trab2){
    const compraSorvete = trab1 || trab2
    const comprartv32 = trab1 && trab2
    
    return { compraSorvete, comprartv32}
}
console.log(compras(true, true))



