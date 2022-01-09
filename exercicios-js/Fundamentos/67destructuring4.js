function rand([min=0, max = 1000]){
    if (min > max) [min, max] = [ max, min] //invertendo caso o min seje maior
    const valor = Math.random()*(max - min) + min
    return Math.floor(valor)

}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))
// vai dar erro console.log(rand())