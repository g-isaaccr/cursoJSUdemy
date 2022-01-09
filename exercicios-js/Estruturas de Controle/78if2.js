function teste1(num){
    if(num > 7)
        console.log(num) // não usar { } influencia bastante

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7)
    
        ; //Sentença de código vazia ' ; ' não usar com as estruturas de controle
    
    {
        console.log(num)

    }

}

teste2(6) // imprimiu tanto o 
teste2(8)