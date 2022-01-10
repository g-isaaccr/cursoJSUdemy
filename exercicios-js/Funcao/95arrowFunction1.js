let dobro = function (a){
    return 2 * a
}
console.log(dobro(6))
dobro = (a) => {
    return 2 * a
}
console.log(dobro(Math.PI))


dobro = a => 2 * a // função de uma única linha
console.log(dobro(15))


let ola = function (){
    return 'Olá'
}
console.log(ola())
ola = () => 'Olá'
ola = _ =>  'Olá' // tem um parametro