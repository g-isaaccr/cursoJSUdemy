// Armazenando um função em uma variavel

const imprimirSoma = function (a,b) {

    console.log(a + b)

}

imprimirSoma(5,6)

// Armazenando uma função arrow em uma variável

const soma = (a,b) => {
    return a + b
}
console.log(soma(4,9))

// Retorno implicito

const subtracao = (a,b) =>a - b
console.log(subtracao(9,5))
console.log(subtracao(8,9))

const imprimir2 = a =>console.log(a)
imprimir2('Legal')