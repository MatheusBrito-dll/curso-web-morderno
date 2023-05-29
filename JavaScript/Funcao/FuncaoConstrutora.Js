function CarObj (max_speed = 250 , delta = 25) {
    let current_speed = 0 
    this.speed_up = function() {
        if(current_speed + delta > max_speed) {
            current_speed = max_speed
        } else {
            current_speed += delta
        }
    }
    this.print_out_ = function(){
        return current_speed
    }
    this.print_out = () => current_speed
}
const uno = new CarObj
uno.speed_up()
uno.speed_up()
console.log(uno.print_out())


/*
Somente com a "Function declaration" a função
é executada antes de todo código, com a "Function Expression"
e "Function Expression".
*/
const array_prod = function array_prod(z, y) {
    return z % y
}

/**
 * Contexto Léxico
 */
const valor = 'Global'

function func_() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    func_()
}
exec()
















