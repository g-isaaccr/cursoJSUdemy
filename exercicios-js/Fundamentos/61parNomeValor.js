//par Nome/Valor

const saudacao = 'Opa' //contexto Léxico 1

function exec() {
    const saudacao = 'Fala' //Contexto léxico 2
    return saudacao
}
// const saudacao = E ai -----> Não encaixaria
//Objetos são grupos aninhados de pares nome/Valor  
const client = {
    nome:'Rodrigues',
    idade:38,
    peso: 80,
    endereco : {
        logadouro:'Rua testando',
        numero:1
    }
 
}
console.log(saudacao)
console.log(exec())
console.log(client)   
