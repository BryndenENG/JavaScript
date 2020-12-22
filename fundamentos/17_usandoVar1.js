
/*
 * Uma variavel Var fica visivel mesmo fora do seu escopo de criação
 */
{
    {
        {
            var sera = 'Sera ???'
        }
    }
}
console.log(sera)

/*
 * Variaveis Var criadas dentro de funções ficam visiveis apenas dentro do escopo da função
 * Gerando erro
 */
function teste()
{
    var local = 123
}
teste()
console.log(local)

/*
 * Dentro dos navegadores existe um objeto que chama window (objeto global) que contem tudo que for 
 * declarado fora de função para ficar visivel globalmente na aplicação 
 * Toda variavel criada fora de funções é uma variavel global
 * 
 * Como estamos trabalhando dentro do node, esse não possui o objeto window, entretanto a variavel criada
 * continua sendo global
 * 
 * Variaveis Var só possui dois escopos, global e dentro de função
 */

 /*
  *
  */