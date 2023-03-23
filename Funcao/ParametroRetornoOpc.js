function notReturn (a, b){
    const ar_ea = b * a
    if(ar_ea >= 20){
        console.log(`Not use.`)
    }else{
        return ar_ea
    }
}
console.log(notReturn())
console.log(notReturn(5, 5))
console.log(notReturn(5, 6, 8, 5, 3, 2, 2))