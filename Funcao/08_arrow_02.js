//This na função arrow não é influenciavel

//O problema encontrado na função anteriormente de incrementar uma variavel idade
//dentro da função arrow não possui esse problema 


//como o this foi chamado dentro de um contexto lexico da função pessoa ele 
//não variavá 
function Pessoa()
{
    this.idade = 0
    setInterval(()=>
    {
        this.idade++
        console.log(this.idade)
    },500/*tempo em ms*/)
}

new Pessoa