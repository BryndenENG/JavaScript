/*- função, 
 *  - em nenhum momento é especificado que uma função retorna algo em javascrip
 *  - função é uma ação dentro do código (treco de código reutilizavel)
 *  - delimitado por chaves 
 *  - toda função tem um nome (existe funções sem nome)
 *  - nome de função começa com function 
 *  - receve parametros de entrada que n precisam de tipo
 */

 //-função sem retorno

function imprimeSoma(a, b)
//função que efetua a soma de dois valores ou concatena duas strings 
{
    console.log( a + b)
}

imprimeSoma(1, 2)

/*
 * - Uma função pode aceitar que um ou mais de seus parametros não sejam colocados, caso isso ocorra
 * se não for dado o devido tratamento o parametro que n foi inicializado adquire valor de undefinide 
 * podendo retornar um valor NaN, para isso não ocorrer basta tratar as entradas ou configurar um valor
 * defaut 
 */
imprimeSoma(1)

/*
 * - Uma função com x parametros pode ser inserido x+n parametros, ocorrerá que o JS ignorará os demais 
 * valores e não gerará erros, da mesma forma que se n inserir nenhum parametro o JS não acusará erros
 * retornando um NaN se não for tratado a ausencia de parametros de entrada
 */
imprimeSoma(10,2,10,20)
imprimeSoma()

/*
 * Função com retorno e tratamento de não entrada de parametros 
 */
function soma(a = 0, b = 0)
{
    return a + b
}
let a = 0 
a = soma(1,5)
console.log(a)
a = soma()
console.log(a)