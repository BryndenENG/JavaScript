
//uma contante que recebe um objeto e esse objeto possui uma função
//objetos é uma relação de par chave valor entretanto é possivel criar funlções
//conforme dado abaixo (recurso novo)
const pessoa = 
{
    saudacao: 'Bom dia',
    falar()
    {
        //esta se acessando saudação do objeto pessoa que é dono dessa função
        console.log(this.saudacao)
    }
}

pessoa.falar() 

//quando se armazena a função dentro de uma variavel ela perde o referencial do
//this acarretando em um undefinined 
const falar = pessoa.falar
falar()

//para resolver esse problema utiliza-se a função bind que solicita um objeto 
//no qual o this terá como referencial 
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

