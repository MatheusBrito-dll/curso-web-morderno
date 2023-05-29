function retornaQuantidade(repete, texto){
    return texto.split("").reduce((acumulador, atual) => atual.toLowerCase() == repete.toLowerCase() ? acumulador + 1 : acumulador + 0, 0)
}
console.log(retornaQuantidade("a", "Abacaxi de cor amarela"))


function retornaQuantidade(repete, texto) {
    return texto.split("").reduce((acumulador, atual) => acumulador + (atual.toLowerCase() === repete.toLowerCase() ? 1 : 0), 0);
  }
  
console.log(retornaQuantidade("a", "Abacaxi de cor amarela")); // retorna 6

  