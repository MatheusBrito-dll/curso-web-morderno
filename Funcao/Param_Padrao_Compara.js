function sum_valor(py, cy, fy){
    py = py || 1
    cy = cy || 1
    fy = fy || 1
    return py + cy + fy
}

console.log(sum_valor(), sum_valor(3), sum_valor(1, 2, 3), sum_valor(0, 0, 0),)
function sum_valor_duo(py, cy, fy){
    py = a !== undefined ? py : 1 
    cy = i in arguments ? b : 1
    fy = isNaN(fy) ? 1 : fy
}

const verificarIgualdadeThisParam = function (param) {
  console.log(this === param);
};

const obj = {};

const verificarIgualdadeThisParamObj = verificarIgualdadeThisParam.bind(obj);
verificarIgualdadeThisParam(global);
verificarIgualdadeThisParamObj(global); 
verificarIgualdadeThisParamObj(obj); 

const verificarIgualdadeThisParamArrow = param => console.log(this === param);
verificarIgualdadeThisParamArrow(global);
verificarIgualdadeThisParamArrow(module.exports);
verificarIgualdadeThisParamArrow(obj);