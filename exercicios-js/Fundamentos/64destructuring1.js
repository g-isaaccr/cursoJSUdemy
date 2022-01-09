//Novo recurso do ES2015

const pessoa ={
    nome: 'Ana',
    idade: '15',
    endereco: {
        logadouro:'Rua 123',
        numero:1000
    }

}

const {nome, idade } = pessoa
console.log(nome,idade)
const {nome:n, idade:i} = pessoa //crie variaveis com o nome n, e idade alterando o nome
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)

const {endereco:{logadouro, numero, cep}} = pessoa
console.log(logadouro,numero,cep)

const {conta: {ag, num}} = pessoa
console.log(ag,num)