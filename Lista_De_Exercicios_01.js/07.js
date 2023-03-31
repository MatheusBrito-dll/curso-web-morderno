/**
 *07) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
 *ou false.
 */

 function multiplo(n1) {
    if(n1 % 3 === 0) {
        return true
    } else {
        return false
    }
 }

 console.log(multiplo(3.5))