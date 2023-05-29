
//NIVEL FACIL

console.log('Excercicio 01')
console.log('FEITO')

//-------------------------------------------

console.log('\nExcercicio 02')
let numero = 0 
if (numero >= 0) {
    console.log('Positivo')
} else {
    console.log('Negativo')
}

//-------------------------------------------

console.log('\nExcercicio 03')
let name_1 = 'Tom'
console.log(`Welcome ${name_1}, good luck!`)

//-------------------------------------------

console.log('\nExcercicio 04')
let num_i = 10
let num_j = 5
console.log(`Adição = ${num_i + num_j} \nSubtração = ${num_i - num_j}` +
    `\nMultiplicação = ${num_i * num_j} \nDivisão = ${num_i / num_j}`)

//-------------------------------------------

console.log('\nExcercicio 05')
console.log(`For`)
for (i = 0; i <= 5; i++){
    console.log(i)   
}

console.log(`\nWhile`)
let opcao_1 = 0
while(opcao_1 <= 5) {
    console.log(`${opcao_1}`)
    opcao_1++
}

//-------------------------------------------

console.log('\nExcercicio 06')
let idade = 17

if(idade < 18) {
    console.log(`Menor de idade :(`)
}else{
    console.log(`Maior de idade :)`)
}

//-------------------------------------------

console.log('\nExcercicio 07')
let numero_01 = 10
let numero_02 = 7

if(numero_01 % 2 == 0){
    console.log(`${numero_01} P`)
}else{
    console.log(`${numero_01} I`)
}
if(numero_02 % 2 == 0){
    console.log(`${numero_02} P`)
}else{
    console.log(`${numero_02} I`)
}

//-------------------------------------------

console.log('\nExcercicio 08')
let nome_08 = 'Matheus Santos Brito'
let idade_08 = 22
console.log(`Nome ${nome_08}\nIdade ${idade_08}`)

//-------------------------------------------

console.log('\nExcercicio 09')
var verifica = true
let num_primo_09 = 7
if(num_primo_09 <= 1){
    verifica = false
}else{
    for (let i = 2; i < num_primo_09; i++ ){
        if(num_primo_09 % i === 0){
            verifica = false
        }
    }
}

if (verifica === true){
    console.log('Primo.')
}else{
    console.log('Não primo.')
}

//-------------------------------------------

console.log('\nExcercicio 10')
for (i = 1; i <= 2; i++){
    for(j = 0; j <= 5; j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
    console.log(`\n`)
}

//-------------------------------------------

//NIVEL MEDIO (10)

console.log('\nExcercicio 01')

//Inverter uma String
const name_01 = 'Matheus'

//Transforma a string em Array
splitString = name_01.split("")

/**
 * Inverte as posições do Array
 * Exemplo ["L", "O", "V", "E"]
 * SAIDA ["E", "V", "O", "L"] 
 */
var arrayRevertido = splitString.reverse()

//o JOIN junta os elementos do Array e passa para String
var arrayJunto = arrayRevertido.join("")

//Imprime a string invertida
console.log(`String invertida >>> ${arrayJunto} Tipo = ${typeof(arrayJunto)}`)

//Usando os 3 métpdps em uma unica função/declaração
function reverterString(str) {
    return str.split("").reverse().join("")
}
console.log(reverterString("Love"))

//-------------------------------------------

console.log('\nExcercicio 02')

const vogais = ['A', 'E', 'I', 'O', 'U'];

const texto = 'Quantas vogais tem esse texto?';

let numeroVogais = 0;

const caracteres = texto.toUpperCase().split("");

for (const caractere of caracteres) {
    if (vogais.includes(caractere)) {
        numeroVogais++;
    }
}
console.log(numeroVogais)

//-------------------------------------------

console.log('\nExcercicio 03')
var lista_numero_03 = [32, 35, 421, 465, 2, 538, 4564, 24, 12, 5, 7, 8534, 532, 531, 231]
var max = Math.max.apply(null, lista_numero_03)
var min = Math.min(...lista_numero_03)
console.log(max)
console.log(min)
