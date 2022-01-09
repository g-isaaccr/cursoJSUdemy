let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(a)
console.log(global.a)
console.log(global.b)
console.log(this.c)

console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports) // module.exports = {c: 456, d: false, e: 'teste'  }

//criando uma variavel diferente: sem var e let, criando uma variavel q dificulta tudo
abc = 6
console.log(global.abc)
