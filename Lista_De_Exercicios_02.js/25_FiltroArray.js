function semelhantePalavras (inicio, palavras) {
    const resultado = []
    for (let palavra of palavras){
        if (palavra.includes(inicio)){
            resultado.push(palavra)
        }
    }
    return resultado
}

console.log(semelhantePalavras("pro", ["programação", "mobile", "profissional"]))