/*
 * Uma variavel Var criada duas vezes com  o mesmo nome em escopos diferentes que não seja função ocorrerá
 * que a primeira será sobrescrita pela segunda 
 * 
 * Esse comportamento não ocorre quando se trabalha com variaveis let
 */
var numero = 1
{
    var numero = 2
    console.log(numero)
}
console.log(numero)
