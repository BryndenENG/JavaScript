// Template string são iniciados e finalizados com crases simples, a inclusão de variaveis denbtro deles é 
//feita com $ e abre e fecha chaves ${}
//Pode aceitar operações dentro das chaves 
//Se alguma tabulação ou espaço for dado dentro do template, ele sera colocado no resultado final também
//Pode ocupar mais de uma linha  
//É possivel chamar funções 

const nome = 'Bryan'

const template =  ` Olá 
                    ${nome}`
console.log(template)


//função: será abordado mais tarde no curso
const up = texto => texto.toUpper.Case()

console.log(`E... ${up('cuidado')}`)

