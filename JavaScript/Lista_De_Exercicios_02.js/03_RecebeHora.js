/**Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
* num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
* da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
* 30%, relativo a impostos.
 */
 function calcularSalarioLiquido(horasTrabalhadas, precoHora) {
    imposto = 0.7 // Mesma coisa de 1 - 0.30
    return console.log('Salário igual  a R$' + Math.round((horasTrabalhadas * precoHora)  * imposto))
 }
calcularSalarioLiquido(180, 60) // 7560
