
let isAtivo = false

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

//usando numeros para definir valores booleanos 

isAtivo = 1

console.log(!!isAtivo)//com base no numero inserido se colocasse apenas uma exclamação iria gerar um valor  falso
//todos os numeros inteiros são considerados como true, até array vaizo, o unico valor considerado como falso é o número 0, string vazio(''), null, NaN e undefined 

//é possivel efetuar operações logicas com strings dentro do js
let nome = 'Lucas'
console.log(nome || 'Desconhecido')
nome = ''
console.log(nome || 'Desconhecido')



