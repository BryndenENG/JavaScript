//Na estrutura if quando apenas uma linha de código fizer parte de sua condição de verdade, o uso das chaves é opcional, apesar de ser recomendavel, caso haja mais de uma linha, apenas com a identação será executado apenas a primeira linha. Para esse processo funcionar a linha a ser executada deve estar identada 

function teste1(num)
{
    if ( num > 7)
        console.log(num)
        console.log('Final...')//mesmo identada essa linha não fará parte da estrutura if, para fazer parte
                               //deve haver um abre e fecha parentesis 
}

teste1(6)
teste1(8)

//não use ponto e virgula na estrutura if pois pode acarretar problemas 

function teste2( num )
{
    if( num > 7 );
    {
        console.log(num)
    }
}

teste2(6)
teste2(9)