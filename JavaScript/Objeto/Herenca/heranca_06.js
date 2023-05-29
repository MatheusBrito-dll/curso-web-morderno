function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(funcao01, ...parametros) {
    const objeto01 = {}
    objeto01.__proto__ = funcao01.prototype
    funcao01.apply(objeto01, parametros)
    return objeto01
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula1, aula2)

