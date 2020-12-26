//Função anonima é uma função sem nome 

const soma = function (x,y)
{
    return x + y
}

//Na operacao caso não seja explicitado nenhuma função de operação ele utilizará a operação da função soma 
const imprimirResultado = function (a, b, operacao = soma)
{
    console.log(operacao(a,b))
}
//não passando o terceiro parametro 
imprimirResultado(3,4)
//passando todos parametros
imprimirResultado(3,4,soma)

//OS DOIS PROXIMOS RECURSOS SÃO BEM COMUNS NA LINGUAGEM JS
//criando e passando ao mesmo tempo uma função anonima 
imprimirResultado(3,4, function (x,y) {return x -y})
//criando e passando uma arrow function (que também é uma função anonima )
imprimirResultado(3,4, (x,y) => x * y)

//outro tipo de função anonima é criar uma função dentro de um objeto 
const pessoa = 
{
    falar: function()
    {
        console.log('Olá')
    }
}

//na nova versão do js
const pessoa2 = 
{
    falar()
    {
        console.log('Olá')
    }
}