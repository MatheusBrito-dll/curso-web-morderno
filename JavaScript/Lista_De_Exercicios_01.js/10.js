function vetor_par(vetor){
    for (i in vetor) {
        if(vetor[i] % 2 === 0){
            console.log(vetor[i])
        }
    }
}

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

vetor_par(vetor)
