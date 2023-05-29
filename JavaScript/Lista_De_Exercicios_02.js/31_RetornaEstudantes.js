/**
 * recerberMelhorEstudante({
 *      Joao: [8, 7.6, 8.9, 6],    ->média 7.625
 *      Mariana: [9, 6.6, 7.9, 8], ->média 7.875
 *      Carla: [7, 7, 8, 9] //     ->média 7.75
 * })
 * ----->>>>    retornará { nome: "Mariana", media: 7.875 }
 */
function calcularMedia(aArray){
    let soma = aArray.reduce((acumulador, atual) => acumulador + atual, 0)
    return soma / aArray.length
}

function notaMaior(objeto){
    maiorMedia = 0
    estudante = '' 
    for(let chave in objeto) {
        if (maiorMedia < calcularMedia(objeto[chave]))
            maiorMedia = calcularMedia(objeto[chave])
            estudante = chave
    }
    return {nome:estudante, media: maiorMedia}
}

console.log(notaMaior({Joao: [8, 7.6, 8.9, 6], Mariana: [9, 6.6, 7.9, 8], Carla: [7, 7, 8, 9]}))