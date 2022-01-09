// Função sem retorno

function imprimirSoma(a,b){

    console.log(a + b)

}

    imprimirSoma(2,3)
    imprimirSoma(1)
    imprimirSoma(2,15,4,5,6,7)
    imprimirSoma()

// Função com retorno    

function soma(a, b=0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(4))
console.log(soma())
