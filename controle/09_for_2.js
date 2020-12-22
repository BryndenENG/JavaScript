//for/in percorre um array, objetos...

const notas = [6.7, 7.4,9.8, 8.1, 7.7]

//recebe o indice e não o valor propriamente dito da nota 
for (let i in notas)
{
    console.log(i, notas[i])
}

const pessoa = 
{
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

//retornará o atributo
for(let atributo in pessoa)
{
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//tanto atributo como i se colocar o let antes o seu escopo ficara apenas dentro do laço for 