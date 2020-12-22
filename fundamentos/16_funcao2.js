/*
 * Armazenar uma função em uma variável 
 */

/*
 * - Será criado uma função anonima que será armazenada dentro de uma varável 
 */

 const imprimeSoma = function (a = 0, b = 0)
 {
    console.log(a + b)
 }

 imprimeSoma(1,2)

 /*
  * Função arrow
  * não é necessário utilizar a palavra function 
  * jeito de se fazer uma função de forma mais reduzida
  */

  const soma = (a = 0, b = 0) => {
    return a + b
  }

  console.log(soma(10,3))

/*
 * Função arrow que retorna valores sem utilizar a palavra return ( retorno implicito) 
 * Função de apenas uma unica linha 
 * não utiliza chaves
 * se tiver um unico parametro não necessita nem dos parentesis no parametro
 */
const subtração = (a =0, b =0) => a - b

console.log(subtração(12,30))

/*
 * Function arrow com apenas um parametro
 */
const imprimir = a => console.log(a)

imprimir(3)