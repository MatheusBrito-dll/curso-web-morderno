const lacoForAnon = function () { 
    const any_nuns = [1, 2, 3, 4, 5]
    
    externo: for (a in any_nuns) { //ROTULO DO FOR 
        for (b in any_nuns){
            if(a == 2 && b == 3) break externo
                console.log(`Par = ${a}, ${b}`)
        }
    }
    return;
}
const imprimirResultado = function (operacao = lacoForAnon){
    operacao()
    return;
}
imprimirResultado()
const sum = function(a, b){
    return a + b
}
const imprimirResultadoII = function(a, b, operacao = sum){
    console.log(operacao(2, 2, function(x, y){
        return x - y 
    }))
}


