//o destructuring em arrays utiliza chaves, é uma forma de atribuir valor de formas mais rápida
//entretanto em virtude da complexidade pode ser mais simples utilizar 

const [a] = [10]
console.log(a)

//é possivel atribuir valores a posições especificas e deixar um valor padrão
const [n1, ,n3, n5, n6 = 0] = [10,7,9,8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[,8,8], [9,6,8]]
console.log(nota)