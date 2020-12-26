//Dois pontos essenciais 
//  -Sintexe reduzida 
//  -This associado ao contexto, ou seja não varia

//função normal
let dobro = function(a)
{
    return 2 * a
}

//função arrow
dobro2 = (a) => 
{
    return 2 * a
}

//função arrow mais simplificada ainda tirando os parentesis, e com apenas um 
//unica parametro, ao tirar as chaves também o return fica implicito 
dobro3 = a => 2 * a

console.log(dobro3(Math.PI))

//função
let ola = function()
{
    return 'olá'
}

//função reduzida 
ola1 = () => 'olá'

//como a função acima não possui um parametro de entrada uma forma de torna-la
//mais reduzida ainda é usar o underline no lugar do parametro, lembrando que
//o underline n vai indicar ausencia de parametro mais sim que o parametro 
//que e o underlinha no código da arrow será desconsiderado 
ola2 = _ => 'olá'

console.log(ola(), ola1(), ola2())

/*
 * FUNÇÕES ARROW PODE TER MUITAS LINHAS COM O BENEFICIO DE TER UM THIS QUE NÃO
 * VARIA 
 */
