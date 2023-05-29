//Vai procurar o arquivo `index.js` na pasta
//`node_modules`  para executar esse  comando ->
//`module.exports = require('./lodash');`
//assim a bibliotea fica disponivel pra você usa. 
const _ = require('lodash')


//setInterval(funcão, tempo)
setInterval(() => console.log(_.random(1, 5)), 2000)
//Instalar o nodemon monitora as mudanças no arquivo
//assim não precisa ficar reiniciando a aplicação 
//toda vez -> npm -g nodemon (NPM = É UM GERENCIADOR DE PACOTES QUE
//QUE FAZ PARTE DO NODE.JS)