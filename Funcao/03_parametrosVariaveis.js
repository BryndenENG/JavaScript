//metodo antigo

//mesmo não tendo parametros, caso sejam digitados é possiveis recupera-lo
//forma mais antiga de se fazer isso 
function soma()
{
    let soma = 0 

    for( i in arguments)
    {
        soma += arguments[i]
    }
    return soma 
}

console.log(soma())

console.log(soma(1))

console.log(soma(1.1,2.2,3.3))

console.log(soma(1.1,2.2,3.3, 'SOMA')) // efetua a soma dos numeros e em seguida
                                       //concatena 

console.log(soma(`a`, `b`, `c`))//concatena os caracteres

