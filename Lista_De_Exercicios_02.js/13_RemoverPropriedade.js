function removerPropriedade(objeto, remover){
    const copia = Object.assign({}, objeto)
    delete copia[remover]
    return console.log(copia)
}
/* 
function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]
    return copia
}


 */

removerPropriedade({a:1,b:2,c:3,d:4}, 'c')