//objeto é uma coleção de chave valor 
//esse conceito também esta presente quando nos referimos a uma variavel 
//variavei e objetos são definidas dentro de um contexto lexico: é um local no qual a variavel ou 
//objeto foi definida fisicamente no código
//uma função pode definir um contexto lexico 

const saudacao = 'Ola'  // contexto lexico 1

function exec()
{
    const saudacao = 'falaa'    //contexto lexico 2, não entra em conflico com  o acima caso este
                                //nao existisse seria buscado o valor em um outro contexto de maior
                                //abrangencia
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor
const cliente =
{
    nome: 'Pedro',  //contexto lexico 3
    idade: 32,
    peso: 90,
    endereco:       //objeto dentro de objeto       
    {
        logradouro: 'Rua Muito Legal',  //contexo lexico 4
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)


