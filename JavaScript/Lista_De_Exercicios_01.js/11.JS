const vetor = [1, 2, 12, 21, 20, 18, 34, 21, 12, 7, 89, 19, 11]
const vetorDentro = []
const vetorFora = []
for (i in vetor){
    if(vetor[i] >= 10 && vetor[i] <= 20){
        vetorDentro.push(vetor[i])
    } else {
        vetorFora.push(vetor[i])
    }
}
console.log(`Dentro do intervalo ${vetorDentro}`)
console.log(`Fora do intervalo ${vetorFora}`)