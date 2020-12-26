//Diferença entre usar funções callback e não utilizar 

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Exemplo de funções com callback e sem callback para extrair notas menores que 7
let notasBaixas = []
for(let i in notas)
{
    if(notas[i] < 7)
    {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//Exemplo acima com callback, a função filter necessita de um array como retorno, ela passa em todo o array varrendo e efetuando a comparação retornando verdadeiro ou falso e anexando os valores verdadeiro ao novo array 
//filter retorna o valor do array e não o indice de sua posição. Para cada elemento do array o filter é chamado, é efetuado o teste tendo como resposta um verdadeiro ou falso, em caso de verdadeiro é retornado o valor para um novo array
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)