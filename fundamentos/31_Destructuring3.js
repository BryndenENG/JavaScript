//usando destructuring em funções

//A função como parametro, ela desestrutura um objeto ao mesmo tempo que atribui um valor padrão
function rand({min = 0, max = 1000})
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//é possivel entrar com um objeto e a função efetuar o destructuring 
const obj = {max: 50, min: 40}
console.log(rand(obj))

console.log(rand({min: 955}))

console.log(rand({}))

//Diferente do de cima que entrou com um bjeto vazio e desta forma sera tomados os numeros
//padrões, neste caso abaxo ocorrerá erro por conta de n haver um objeto 
//console.log(rand())

