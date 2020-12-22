//exemplo de if's encadeados 

//a função abaixo se refere a uma função associada a um tipo de dados
Number.prototype.entre = function(inicio, fim)
{
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota)
{
    //testa várias condições e só executa aquela que for satisfeita 
    if(nota.entre(9, 10))
    {
        console.log('Quadro de Honra')
    }
    else if(nota.entre(7,8.99))
    {
        console.log('Aprovado')
    }
    else if(nota.entre(0,3.99))
    {
        console.log('Reprovado')
    }
    else
    {
        console.log('Nota invalida')
    }
    console.log('fim...')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

