/* USANDO LET EM LAÇO DE REPETIÇÃO 
 * a diferença entre usar var e let é que ao final do uso com let a variavel não está mais disponivel
 * no exemplo abaixo ocorrerá erro na compilação
 */
for(let i = 0; i < 10; i++)
{
    console.log(i)
}
console.log(i)