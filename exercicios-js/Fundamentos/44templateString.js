const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
const template = `
         Olá
    ${nome}!

`
console.log(concatenacao,template)

// expressões...

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() //funcão arrow

console.log(`Ei ... ${up('cuidado')}!`)
