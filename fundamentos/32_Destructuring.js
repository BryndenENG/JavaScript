//usando destructuring em funções com parametro de entrada sendo um array

function rand([min = 0, max = 1000])
{
    if (min > max) [min,max] = [max, min]
    const valor = Math.random() * (max - min) + min
    //arredonda para baixo
    return Math.floor(valor)
}

console.log(rand([50,40]))

console.log(rand([992]))

console.log(rand([ , 10]))

console.log(rand([]))

//GERA ERRO 
//console.log(rand())