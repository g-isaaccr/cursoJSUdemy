function compras (trabalho1, trabalho2){

    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSauvavel = !comprarSorvete //operador unário

    return { comprarSorvete : comprarSorvete,  //comprarSorvete : comprarSorvete seria redundante criar um objeto o reconsiderar, quando eu só coloco um valor eu considero o conceito de objeto
            comprarTV50, comprarTv32, manterSauvavel}

}  

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(true, true))
