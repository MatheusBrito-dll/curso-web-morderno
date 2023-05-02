const aluno = [
    {nome: 'Matheus', nota: 10},
    {nome: 'Esher', nota: 10}
]

// Imperativo
let total1 = 0
for (let i = 0; i < aluno.length; i++) {
    total1 += aluno[i].nota
}
console.log(total1 / aluno.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = aluno.map(getNota).reduce(soma)
console.log(total2 / aluno.length)