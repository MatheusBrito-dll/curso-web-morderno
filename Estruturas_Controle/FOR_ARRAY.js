//Conta até 10
for(let i = 1; i <= 10; i++) {
    console.log(`${i}`)
}
//Cria um array de 5 posições
const any_array = [6.7, 8.7, 3.8, 4.3, 2.9]
//Imprime o array (any_array)
for(let i = 0; i < any_array.length; i++){
    console.log(any_array[i])
}
//Imprime o array com "for in"
for (i in any_array) {
    console.log(i, any_array[i])
}
//Cria o objeto pessoa literal
const pessoa = {
    firstName: 'Cristhian',
    middleName: 'Greg',
    lastName: 'Sebastian',
    age: '21',
    kg: '63'
}
//Percorre o objeto pessoa com o "for in"
for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
//Usando for com rotulo
const any_nuns = [1, 2, 3, 4, 5]

externo: for (a in any_nuns) { //ROTULO DO FOR 
            for (b in any_nuns) {
                //Condição de parada, para sair do for rotulado -> Externo
                if(a == 2 && b == 3) break externo
                    console.log(`Par = ${a}, ${b}`)
            }
}