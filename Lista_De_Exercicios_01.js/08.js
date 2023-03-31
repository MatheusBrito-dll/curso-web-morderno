function fat (n1) {
    tot = 0
    for (i = n1; i >= 0; i--){
        tot += 5 * (5 -1)    
    }
    return tot
}

console.log(fat(5))