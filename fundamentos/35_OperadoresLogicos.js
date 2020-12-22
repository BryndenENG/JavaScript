function compras(trabalho1, trabalho2)
{
    const comprarSorvete = trabalho1 || trabalho //Operador logico ou
    const comprarTv59 = trabalho1 && trabalho2 //operador "e"
    
    //nção existe ou exclusivo para se trabalhar com booleanos dentro do javaScrit, o simbolo de != simula um ou exclusivo dentro do js\    
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete,comprarTv59, comprarTV32, manterSaudavel}
}
console.log(compras(1,1))