const person = {
    name: "Matheus Brito",
    username: "matheus.brito",
    password: "",
    post: null,
}

const chave = (key = 'xxx') => key

console.log(person)

// O operador ||= só deixa fazer a atribuição se o conteudo da variavel
// retorna falso.
person.password ||= chave()

console.log(person)

// O operador &&= só adiciona o valor se ele for verdadeiro
person.password &&= chave('password123')

console.log(person)

// O operador ??= verifica se o valor retornado é null ou undefined
person.post ??= 1
console.log(person)

person.post ??= 2
console.log(person)