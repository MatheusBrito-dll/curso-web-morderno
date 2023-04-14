const obj = {a:1, b: 2, c:3, soma(){return a + b + c}}

console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a": 1,"b": 2.1,"c": true}'))
console.log(JSON.parse('{"Texto": "string","Objeto": {"Dentro": 5},"Array": []}'))