//If traduzindo para o português seria o "SE"

function soBoaNoticia(nota)
{
    //executará somente se a condição abaixo de nota for satisfeita 
    if( nota >= 7 ) //expressão relacional
    {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor)
{
    //se valor for enquadrado dentro dos valores como True retornará o conteúdo interno do if 
    if ( valor )
    {
        console.log('É verdade... ' + valor)
    }
}

console.log(1)
seForVerdadeEuFalo() //passou nada ou seja undefined 
console.log(2)
seForVerdadeEuFalo(null)
console.log(3)
seForVerdadeEuFalo(undefined)
console.log(4)
seForVerdadeEuFalo(NaN)
console.log(5)
seForVerdadeEuFalo('')
console.log(6)
seForVerdadeEuFalo(0)
console.log(7)
seForVerdadeEuFalo(-1)
console.log(8)
seForVerdadeEuFalo('')
console.log(9)
seForVerdadeEuFalo('?')
console.log(10)
seForVerdadeEuFalo([])
console.log(11)
seForVerdadeEuFalo([1,2])
console.log(12)
seForVerdadeEuFalo({})