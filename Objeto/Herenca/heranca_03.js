//Objeto filha e filha01 apontão para o Objeto PAI como PROTO

const pai = {nome: 'Pedro', corCabelo: 'Preto'}

//Cria o objeto filha ja apontando para o objeto pai
const filha = Object.create(pai)

filha.nome = 'Ana'
console.log(filha, pai)

//Vai imprimir a cor preta pois ele procurou o atributo 
//corCabelo no Objeto filha e não achou e foi procurar no
//prototipo apontado que no caso é o objeto pai
console.log(filha.corCabelo)

const filha01 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha01.nome)
filha01.nome = 'Carla'
console.log(`${filha01.nome} tem cabelo ${filha01.corCabelo}`)

console.log(Object.keys(filha01))

for(let key in filha01) {
    //Essa propiedade pertence ao objeto `filha01`? 
    filha01.hasOwnProperty(key)?
    // sim : não
    console.log(key) : console.log(`Por herança: ${key}`)
} 
