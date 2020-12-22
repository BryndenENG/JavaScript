//simbolo para atribuição estrair - implementado no ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5, 
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//estrai do objeto pessoa os atributos nome e idade
const {nome, idade} = pessoa
console.log(nome,idade)

//estrai do objeto pessoa os atributos nome e idade e os atribui a variaveis (n e i)
const {nome: n, idade: i} = pessoa
console.log(n,i)

//quando se estrai atraves do uso de struct um valor que não existe dentro do objeto ele retorna
// o valor undefinided, é possivel atribuir um valor pré configurado caso o valor buscado não 
//exista 
const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome,bemHumorado)

//buscar um atributo que esta em um objeto e esse atributo esta incluso em um segundo objeto
//interno
const { endereco: {logradouro, numero, cep}} = pessoa 
console.log(logradouro, numero, cep)

//mesmo que a linguagem JS não apresente muitos erros no caso de objeto e o uso do destructuring 
//é importante que o caminho até o atributo desejado esteja correto, caso negativo ocorrera uma 
//mensagem de erro do sistema, o atributo a ser buscado pode não existir e ele retornará 
//undefinided, entretanto se o caminho não existir como abaixo, ocorrerá erro 
const {conta: {ag, num}}; pessoa
console.log(conta, num)

