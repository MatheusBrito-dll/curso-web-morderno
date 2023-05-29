function confereDia(dia){
    if(typeof(dia) === 'string'){
       return console.log('ERRO - Digite um número')
    } else{
        switch (dia) {
            case 1:
                return console.log('Domingo - Não útil.')
            case 2:
                return console.log('Segunda - Útil.')
            case 3:
                return console.log('Terça - Útil.')
            case 4:
                return console.log('Quarta - Útil.')
            case 5:
                return console.log('Quinta - Útil.')
            case 6:
                return console.log('Sexta - Útil.')
            case 7:
                return console.log('Sábado - Não Útil.')
            default:
                return console.log('Entrada inválida')
        }
    }
}
confereDia('A')
confereDia(3)
confereDia(15)