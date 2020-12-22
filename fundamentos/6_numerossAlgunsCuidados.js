//JS possui um tipo quando uma operação gera valor infinito resultando em 'Infinity'
console.log(7/0)

//sE UMA STRING CONTER UM NUMERO E O JS IDENTIFICAR ESTE COMO UM numero a operação matemática ocorrerá
console.log("10"/2)//reconhece como numero 
console.log("10.2"/2)//reconhece como numero
console.log("10,5"/2)//não reconhece como numero por conta da virgula - RETORNA NAN 

//OPERAÇÃO DE MULTIPLICAÇÃO COM STRINGS QUE N CONTEM VALORES QUE PODEM SER ENTENDIDOS COMO NUMEROS NÃO OCORRE
//RETORNANDO VALOR NAN
console.log('show'*2)

//Operações com ponto flutuante no JS tende a ser imprecisas, pois se opta pela velocidade em virtude da precisão
console.log(0.1 +0.7)//retorna 0.799999999999999999