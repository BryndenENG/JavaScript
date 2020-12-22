
const nome = 'Tarcisio'

//retorna o caractere que se encontra na quarta posição, o primeiro caractere é o indice 0
console.log(nome.charAt(4)) 

//caso for solicitado  um indice maior que a propria string , será retornado vazio
console.log(nome.charAt(15))

//retona o valor do caractere que foi solicitado com base no indice com seu valor na tabela ASCII
console.log(nome.charCodeAt(3))

//verifica se determinado caractere se encontra na string e retorna a posição em que o mesmo se enconmtra
console.log(nome.indexOf('i'))

//retorna uma substring da string inserida, recebe como parametro a posição inicial e final, caso a posição
//final não seja definida o mesmo irá até o final da string 
console.log(nome.substring(2))
console.log(nome.substring(1,4))

//concatenação 
const sobrenome = 'Souza de Melo'
console.log('Nome: '.concat(nome).concat(sobrenome))
//também é possivel para concatenar utilizar o operador +
console.log('Tarcísio ' + 'Souza ' + 'de ' + ' Melo')

//substituição de determinado indice da string por outro valor primeiro parametro é o indice da string e o
//segundo valor é o dado que substituirá  
console.log(nome.replace(1, 'A'))

//quebrar string gerando um array com base em um separador - pode ser usado com literal diretamente
const teste = 'Barbara, Bryan, Tarcisio, Biscoito, Ted, Bola de Neve'
console.log(teste.split(', '))