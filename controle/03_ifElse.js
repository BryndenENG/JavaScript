//estrutura else é executada caso a estrutura IF não tenha sua condição dada como 'True'

const imprimirResultado = function(nota)
{
    if( nota >= 7)
    {
        console.log('Aprovado!')
    }
    else
    {
        console.log('Reprovado')
    }
}

imprimirResultado(10)

imprimirResultado(4)

//um cuidado deve ser tomado em linguagens fracamente tipadas pois um parametro que não foi pensado ou a sua forma pode gerar uma resposta indesejada
imprimirResultado('epa')