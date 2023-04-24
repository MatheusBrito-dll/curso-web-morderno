const aprovados = ['Luiz', 'Aldo', 'Daniel', 'Lucas']

//CallBack da função
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach((nome, indice) => console.log(indice, nome))

