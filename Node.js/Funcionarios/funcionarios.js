const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios =  require('axios')

//Desafio aula 154
//Minha solução!
axios.get(url).then(response =>{
    const funcionarios = response.data
    let menorSalario = Infinity
    let nome = ''
    let pais = ''
    for (i in funcionarios){
        if(funcionarios[i].salario < menorSalario && funcionarios[i].pais === 'China' && funcionarios[i].genero === 'F'){
            if (funcionarios[i].salario < menorSalario){
                menorSalario = funcionarios[i].salario
                nome = funcionarios[i].nome
                pais = funcionarios[i].pais
            }
        } 
    } return console.log({nome: nome, pais: pais, salario: menorSalario})
})

//Solução do professor
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario2 = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}
axios.get(url).then(response =>{
    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario2)
    console.log(func)
})

const objetoTeste = [{
"id"        :  1,
"nome"      :  "Feodor",
"sobrenome" :  "Pheby",
"email"     :  "fpheby0@163.com",
"genero"    :  "M",
"cidade"    :  "Bal’shavik",
"pais"      :  "Belarus",
"empresa"   :  "Dabjam",
"salario"   :  2401.69
}, 
{
"id"        :  2,
"nome"      :  "Lucio",
"sobrenome" :  "Paniago",
"email"     :  "LucioPaniago@163.com",
"genero"    :  "F",
"cidade"    :  "Cuibá",
"pais"      :  "Brazil",
"empresa"   :  "IFMT",
"salario"   :  3456.32
}]
