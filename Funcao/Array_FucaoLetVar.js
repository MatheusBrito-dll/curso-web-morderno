
//USANDO ARRAYS COM FUÇÕES (VAR)
const funcs = [];

for (var j = 0; j < 10; j++) {
    funcs.push(function() {
        console.log(j + 1)
    })
}

/**
 * O valor (11, 11) é impresso por que j foi declarado 
 * com escopo GLOBAL, então qnado chamo funcs[2]()
 * ele vai imprimir o valor de J, mas como o j é global 
 * ele vai imprimir o valor 11.. continua no proximo laço.
 */

funcs[2]() 
funcs[8]()

//USANDO ARRAYS COM FUÇÕES (LET)
/**
 * Ja aqui que a variavel é declarada com LET variavel de
 * escopo de bloco, a cada interação que for adicionado ao funcs1
 * a variavel vai quardar em memória o valor que ela foi registrada no 
 * momente que foi adicionada no array. por isso que quando eu tento
 * acessar o indice 0 do array o resultado é 1 e não 11.
 */
const funcs1 = [];
for (let r = 0; r < 10; r++) {
    funcs1.push(function(){
        console.log(r + 1)
    })
}

funcs1[0]() 
funcs1[8]()

