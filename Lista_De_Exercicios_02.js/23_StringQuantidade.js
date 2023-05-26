function stringQuantidade(texto){ 
    const palavras = texto.split(" ")
    return palavras.length
}
console.log(stringQuantidade("ARROZ FEIJAO GRANOLA CHOCOLATE"))