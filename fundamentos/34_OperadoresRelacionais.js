//EM UMA OPERAÇÃO DE COMPARAÇÃO O RESULTADO SEMPRE SERÁ VERDADEIRO OU FALSO 

//Comparando um valor numerico só que em string e um valor numerico, js reconhecera a string como
//um numero e retornará o valor 
console.log('1)', '1' == 1 )    // '==' comparação 

//além de comparar o valor compara o tipo  'estritamente igual'
console.log('2)', '1' === 1) 

//verifica se é diferente 
console.log('3)', '3' != 3)

//verifica se é estritamente diferente
console.log('4)', '3' !== 3)

//menor 
console.log('5)', '3' < 3)

//menor ou igual
console.log('6)', '3' <= 3)

//maior 
console.log('7)', '3' > 3)

//maior ou igual
console.log('8)', '3' >= 3)

//estará sendo efetuado a comparação de posições de memoria, em ambos casos apresentando resultado falso
const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
//estará comparando o valor armazenado no endereço aprensentando resultado true, o resultado não seria alterado caso fosse usado apenas '=='
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)

//VIA DE REGRA RECOMENDA-SE UTILIZAR EM IGUALDADES O '===' extreitamente igual