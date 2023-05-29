const a = 1
const b = 2
const c = 3

const obj1 = { a, b, c}
const obj2 = { a: a, b: b, c: c}

console.log(obj1)
console.log(obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj5 = {
    funcao1: function(){
        // ...
    },
    function2(){
        //...
    }
}

console.log(obj5)
