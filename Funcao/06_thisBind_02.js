function Pessoa()
{
    this.idade = 0

    setInterval(function()
    {
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}

//setInterval executa determinado trecho de código em um intervalo de tempo 
//predeterminado, como o this esta dentro de seInterval ele não possi a 
//referencia do this da função acarretando em erro

//para corrigir esse problema a função setInterval aceita como parametro a 
//função bind 


//outra forma de acessar o valor é através de uma constante que armazenará o 
//valor de this 
function Pessoa2()
{
    this.idade = 0

    const self = this 

    setInterval(function()
    {
        self.idade++
        console.log(self.idade)
    },500/*tempo em milessegundos*/)
}

new Pessoa2

