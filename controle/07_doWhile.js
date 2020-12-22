//Variante da estrutura while 

//garante que o laço seja executado pelo menos uma unica vez, ja que diferente do while sua verificação ocorre no fim enquanto o while ocorre no inicio

function getInteiroAleatorioEntre(min,max)
{
    const valor = Math.random() * (max - min ) + min
    return Math.floor(valor)
}

let opcao = 0

do
{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('opção escolhioda foi ' + opcao)

}while(opcao != -1)

console.log('Até a Próxima!')
