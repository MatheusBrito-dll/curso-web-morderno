const aprovados = ['Luiz', 'Aldo', 'Daniel', 'Lucas']

/**
 * Exemplificando o foreach, usando o mesmo método
 * que usasamos anteriormente com String que não tinha o
 * metodo de reverter string, e agora estamos adicionando
 * o metodo `foreach2` no OBJETO Array, ele recebe a função
 * que vai percorrer a função, e como parametro ele recebe a
 * função callback, que é passado quando voce usa o `foreach` 
 * o this serve para ele pegar o tamanho do array que esta no
 * contexto de execucão da função.
 * @param {*} callBack 
 */
Array.prototype.forEach2 = function(callBack){
    for (let i = 0; i < this.length; i++){
        callBack(this[i], i, this)
    }
}

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

