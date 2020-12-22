const peso1 = 1.0

//outra forma de indicar um numero para variavel
const peso2 = Number('2.0')

console.log(peso1, peso2)

//verifica se uma constante possui um numero do tipoo inteiro, retornando true ou false 
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

//definir o numero de casas decimais 
console.log(media.toFixed(2))//duas casas decimais 

//conversão para tipo string
console.log(media.toString())

//convertendo para binário
console.log(media.toString(2))

//tipo do dado gerado
console.log(typeof media)