
//Explicação de operador ternário com utilização de função arrow

//Primeira parte do operador ternario é uma condição relacional, a segunda parte é é o resultado verdadeiro e a terceira é o resultado falso para a condição nota > 7
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'


console.log (resultado(7.1))

console.log(resultado(7.0))


//a resposta de um operador ternario é retornar uma das duas opções após a interrogação

const status = nota >= 7 ? 'Aprovado' : 'Reprovado'

