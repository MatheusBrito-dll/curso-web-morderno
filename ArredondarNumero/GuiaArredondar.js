


// Exemplo usando Math.round()
console.log(Math.round(4.49)); // retorna 4
console.log(Math.round(4.5)); // retorna 5
console.log(Math.round(5.5)); // retorna 6
console.log(Math.round(-4.1)); // retorna -4
/**este método arredonda um número para o inteiro mais próximo.
 * Se a fração for exatamente 0,5, o número será arredondado para
 * o inteiro mais próximo par. Os exemplos demonstram que 4,49 é 
 * arredondado para 4, enquanto 4,5 é arredondado para 5. 
 **/



// Exemplo usando Math.floor()
console.log(Math.floor(4.7)); // retorna 4
console.log(Math.floor(-4.7)); // retorna -5
/**este método arredonda um número para o menor inteiro igual ou menor
 * que o número. Os exemplos demonstram que 4,7 é arredondado para 4,
 * enquanto -4,7 é arredondado para -5. 
 **/



// Exemplo usando Math.ceil()
console.log(Math.ceil(4.2)); // retorna 5
console.log(Math.ceil(-4.2)); // retorna -4
/**este método arredonda um número para o menor inteiro igual ou maior que o número.
 * Os exemplos demonstram que 4,2 é arredondado para 5, enquanto -4,2 é arredondado para -4. 
 **/



// Exemplo usando Number.toFixed()
console.log((4.567).toFixed(2)); // retorna "4.57"
/**este método converte um número em uma string com um número especificado de casas decimais.
 * O exemplo demonstra que 4,567 é arredondado para 4,57, já que o método toFixed() retornou
 * uma string com duas casas decimais, arredondando o número para cima na segunda casa decimal. 
 **/
