/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros
 *  e tempo de aplicação. A primeira função retornará o montante da aplicação financeira 
 * sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime 
 * de juros compostos.
 * J →  juros
 * C →  capital
 * i →  taxa de juros
 * t →  tempo
 * J = C ∙ i ∙ t
 */

function simples(taxaDeJuros, capital, tempoMeses){
    return console.log(`${capital + (capital * taxaDeJuros * tempoMeses)}`)
}
simples(0.05, 400, 2)

function compostos(taxaDeJuros, capital, tempoMeses){
    return console.log(`${capital * Math.pow(1 + taxaDeJuros, tempoMeses)}`)
}

compostos(0.5, 100, 2)