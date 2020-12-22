//Variáveis do tipo let possuem escopo

var numero = 1
{
    let numero = 3
    console.log('dentro =', numero)
}
console.lor('fora', numero)