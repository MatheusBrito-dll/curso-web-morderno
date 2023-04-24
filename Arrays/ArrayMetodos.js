const pilotos = ['Vettel', 'Alonso', 'Massa']
//Remove o último elemento
pilotos.pop()
console.log(pilotos)
//Remove a primeira possição
pilotos.shift()
console.log(pilotos)
//Coloca no fial do array
pilotos.push('PilotoFinal')
//Coloca no começo
pilotos.unshift('PilotoComeço')
//--------------
console.log(pilotos)
//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Masssa')
console.log(pilotos)
//Remover
pilotos.splice(3, 1)
console.log(pilotos)
//Retorna um novo array a partido do parametro
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)