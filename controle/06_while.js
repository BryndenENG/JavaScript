//Usado para laço indeterminado de vezes (recomendavel) pode ser usado para uso de laço determinado de vezes 

function getInteiroAleatorioEntre(min,max)
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arredonda para baixo
}

let opcao = 0

//se ao entrar a condição já for falsa ele não executa o que esta entre as chaves 
while(opcao != -1)
{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('Opção escolhida foi ' + opcao)
}

console.log('Até a proxima')