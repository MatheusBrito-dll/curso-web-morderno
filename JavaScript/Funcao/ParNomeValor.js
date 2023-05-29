const saudacao = 'O' //Léxico 1

function exec() {
    const saudacao = 'F' //Léxico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares noime/valor

const cliente = {
    nome: 'Lucas',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Enio Arruda',
        numero: 282
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)