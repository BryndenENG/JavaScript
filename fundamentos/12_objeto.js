
//Objetos são criados dinamicamente dentro do js, OU SEJA pode ser criado durante o código
//O objeto no JS é uma coleção de chave valor 
//para criar um objeto é com0 se informa abaixo 
//um objeto pode ter um outro objeto dentro de si
const prod1 = {}
prod1.nome = 'Celular Ultra mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar nomes com espaço

console.log(prod1)

//outra forma de criar objetos é o instanciando todo de uma vez 
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {//objeto dentro de objeto
        blabla: 1, 
    }
}

//JSON não é um objeto, é um formato textual 
//A PARTIR DE UM OBJETO É POSSIVEL CRIAR UM JSON 