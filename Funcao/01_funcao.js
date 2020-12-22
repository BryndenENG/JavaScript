// Função em JS é First-Class Object (Citizens)
//Higher-order function 

//Função pode ser tratado como um dado, sendo um dado, ela pode ser passado como um parametro, é possivel retornar uma função como resposta de uma função 

//É possivel criar uma função e armazenar dentro de uma variavel 

//JS é uma linguagem multi paradigma podendo ser implementado logica procedural, oo e funcional

//Criar função de forma literal
//palavra function nome da função e parametros entre parentesis 
//logica da função ficando entre parentesis 
//pode receber parametros e retornar valores, caso a função n retorne valores ela retornará undefinided 
//mesmo que a função tenha apenas uma unica linha, não é permitido omitir o bloco '{}' 
function fun1()
{

}

//Armazenar uma função dentro de uma variavel  
//funções armazenadas dentro de variaveis são anonimas, ou seja, não possuem nome 
//chamando a variavel com os parentesis que armazenam os valores é possivel chamar sua função interna 
const fun2 = function()
{

}

//Armazenar uma função dentro de um array 
//não é comum, é mais comum armazenar uma função dentro de uma variavel e essa variavel dentro de um array  
const array = [function(a,b){return a + b }, fun1, fun2]
console.log(array[0](2,3))

//Armazenar uma função dentro de atributo de objetos 
//cria-se um objeto e aloca-lo dentro de um atributo de um objeto, mesmo que esse atributo ainda não exista dentro do objeto
const obj = {} //objeto vazio
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//Como passar uma função como parametro para outra função
//enriquece muito a linguagem 
//não é o melhor exemplo 
function run(fun)
{
    fun()
}
//possivel inclusive até criar a função dentro do parametro 
run(function(){console.log('Executando...')})

//função pode retornar/conter uma função
function soma(a,b)
{
    return function(c)
    {
        console.log(a + b+ c)
    }
}
//como a função soma já retorna uma função o (4) é passado como parametro ja de imediato para a proxima função
soma(2,3)(4)
//ou armazenar o recebimento em uma variavel e depois passar o parametro
const cincoMais = soma(2,3)
cincoMais(4)

