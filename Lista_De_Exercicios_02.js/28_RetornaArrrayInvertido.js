function inverter(objeto){
    let invertido = {}
    for (let atributo in objeto){
        const valor= objeto[atributo]
        invertido[valor] = atributo
    }
    return invertido
}
/**
 * O método Object.fromEntries() é uma função estática introduzida no 
 * ECMAScript 2019 (ES10) que transforma um iterável (como um array de 
 * pares chave-valor) em um novo objeto.
 * Ele recebe como argumento um iterável contendo pares chave-valor, 
 * em que cada par é um array em que o primeiro elemento é a chave e o 
 * segundo elemento é o valor correspondente. Em seguida, ele retorna um 
 * novo objeto com as chaves e valores dos pares fornecidos.
 */
function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )                       
    return Object.fromEntries(paresDeChaveValorInvertidos)                              
}                                                                          