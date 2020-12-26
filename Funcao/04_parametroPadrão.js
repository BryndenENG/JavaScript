//antes da versão atual ja era possivel trabalhar com parametros padrões 

//utilizando o "ou" para  o caso de n ser colocado nenhum valor 
function soma1(a,b,c)
{
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
//existe um erro nessa estratégia pois ao utilizar o valor zero será retornado
//valor falso fazendo com que o valor 1 seja o escolhido 
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

//segunda estratégia
//três opções de se trabalhar com essa hipótese sendo a terceira a mais 
//recomendavel 
//ainda sim é um processo um pouco complexo 
function soma2(a,b,c)
{
    //estratégia 1: verificar se a é diferente ou estritamente de undefinined
    //caso for igual aplicar a = 1
    a = a !== undefined ? a: 1
    //estratégia 2: verificar se no array arguments na posição 1 que se refere
    //ao segundo parametro se o mesmo esta vazio, se sim b recebe 1
    b = 1 in arguments ? b: 1
    //estratégia 3: verificar se c é um numero, caso n seja o mesmo recebe o 
    //valor 1, nesta forma fica de uma forma mais segura
    c = isNaN(c) ? 1: c
    
    return a + b + c
}
console.log(soma2(),soma2(3), soma2(1,2,3), soma2(0,0,0))

//valor padrão es2015 - opção mais recomendável 
function soma3(a = 1, b = 1, c = 1)
{
    return a + b + c
}

console.log(soma3(),soma3(3), soma3(1,2,3), soma3(0,0,0))