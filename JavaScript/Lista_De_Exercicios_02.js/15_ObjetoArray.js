function retornaArrayObjeto(objeto){return Object.entries(objeto)}
console.log(retornaArrayObjeto({nome: "Matheus", idade: 19}))

function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
}

function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map( chave => [chave, objeto[chave]] )
    return resultado
}


    

