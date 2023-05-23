function somarNumeros(numeros) {
    const quantidadeDeNumeros = numeros.length
    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}
    