//tradução do ingles da palavra hoisting chama jogar para cima 
console.log('a = ', a)
var a = 10
console.log(a)

//ocorre que o sistema não gera um erro pois a variavel é içada para cima, seu valor aparece como undefinided 
//indicando que ela existe dentro do programa porem naquele ponto ainda não foi atribuido um valor para a 
//mesma 
// o que ocorre é como abaixo 
//var a
//console.log('a =', a)
//a = 10
//console.log(a)

//MESMO COM ESSE EFEITO, DECLARE AS VARIAVEIS ANTES DE UTILIZAR 

//O EFEITO DE IÇAMENTO COM VARIAVEIS DO TIPO LET NÃO FUNCIONA E GERA ERRO 
