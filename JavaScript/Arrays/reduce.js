const alunos = [
    {nome: 'João', nota: 1, bolsista: true},
    {nome: 'Maria', nota: 2, bolsista: true},
    {nome: 'Pedro', nota: 3, bolsista: true},
    {nome: 'Ana', nota: 4, bolsista: true},
    {nome: 'Lucas', nota: 5, bolsista: true},
    {nome: 'Carla', nota: 6, bolsista: false},
    {nome: 'Gabriel', nota: 7, bolsista: true},
    {nome: 'Mariana', nota: 8, bolsista: true}
  ];
console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10 )

console.log(resultado)

console.log(alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) {
    console.log(resultado, bolsista)
    return resultado && bolsista
}))
