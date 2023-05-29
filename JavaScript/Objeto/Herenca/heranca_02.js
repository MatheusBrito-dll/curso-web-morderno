// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' //Não faça isso :(

// Avo tem como protótipo o Object.prototype
const avo = {attr1: 'A'}

// Pai tem como protótipo o avo
const pai = {__proto__: avo, attr2: 'B'}

//Filho tem como protótipo o pai
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    },
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        //Usar o super para evitar chamar o mesmo método
        //usando o super ele vai chamar o método do protótipo
        //que é o obj carro
        return `${this.modelo}: ${super.status()}`
    }
}

//Adiciona o prótotipo ao primeiro parametro (objeto/prototipo)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())