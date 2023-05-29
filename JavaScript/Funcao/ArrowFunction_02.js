// Função que verifica se o "this" é igual ao parâmetro passado
const verificarIgualdadeThisParam = function (param) {
    console.log(this === param);
};

// Chama a função "verificarIgualdadeThisParam" passando o objeto global como parâmetro
verificarIgualdadeThisParam(global); // resultado: true

// Cria um objeto vazio
const obj = {};

// Vincula a função "verificarIgualdadeThisParam" ao objeto "obj"
const verificarIgualdadeThisParamObj = verificarIgualdadeThisParam.bind(obj);

// Chama a função "verificarIgualdadeThisParamObj" passando o objeto global e o objeto "obj" como parâmetros
verificarIgualdadeThisParamObj(global); // resultado: false
verificarIgualdadeThisParamObj(obj); // resultado: true

// Cria uma arrow function que verifica se o "this" é igual ao parâmetro passado
const verificarIgualdadeThisParamArrow = param => console.log(this === param);

// Chama a arrow function "verificarIgualdadeThisParamArrow" passando o objeto global como parâmetro
verificarIgualdadeThisParamArrow(global); //false
verificarIgualdadeThisParamArrow(module.exports); //true
verificarIgualdadeThisParamArrow(obj); //false
