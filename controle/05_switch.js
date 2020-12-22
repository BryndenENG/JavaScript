
//switch é feito para multiplas seleções 

// A expressão parametro de um switch não retorna nenhum valor 

//Para o correto funcionamento do switch, cada caso executa um conjunto de instruções de código, para que um case n invada a serie de codigos do proximo é necessário usar 'break' para indicar o fim daquele case, não utilizando todos os padrões abaixo serão executados 

//é possivel colocar mais de um case por linha 

// o case não aceita verificação de condições (ex: x > y )


//default serve para o caso de nenhum case ter sido executado

//em situações normais após a execução de um case ele sai da estrutura switch 

const imprimirResultado = function(nota)
{
    //Math.Floor() arredonda um numero para baixo
    switch(Math.floor(nota))
    {
        //quando existe um case vazio ele executa o abaixo dele 
        case 10:
        
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')
            break
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)