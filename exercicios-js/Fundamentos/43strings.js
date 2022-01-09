const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(6)) // Te retorna vazio 
console.log(escola.charCodeAt(3) ) // charCodeAt é referente a tabela ascii
console.log(escola.indexOf('3'))//Me retorna o indice 3 uma vez que o primeiro indice é o 0 ("C")

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '+ (escola) + ("!"))
console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(',')) //Com isso eu gero um array