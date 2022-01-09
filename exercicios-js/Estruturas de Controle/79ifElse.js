const imprimirResultado = function (nota){
    if(nota >= 7 ){
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }

}
imprimirResultado(5)
imprimirResultado(11)
imprimirResultado('Epa!') // Não vou conseguir fazer a comparação, mas vai aparecer o reprovado pois é uma linguagem fracamente tipada
