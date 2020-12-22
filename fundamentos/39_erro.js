//Tratamento de erro no Node  usando try catch e throw
//utilizado para tratar um possivel erro em alguma parte do código 

//try: bloco de código a se tentar executar 
//catch(): captura possivel erro para tratamento 
//throw: lança uma mensagem 
//finally: mesmo que ocorra o erro o bloco finally é executado 

function trataErroELancar(erro){
    //possibilidades
    
    //inserir nova mensagem de erro
    //throw new Error('...')
    
    //enviar um numero
    //throw 10
    
    //enviar um booleano
    //throw true
    
    //enviar uma mensagem 
    //throw 'mensagem'
    
    //enviar um objeto
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try
    {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e)
    {
        trataErroELancar(e)
    }
    finally
    {
        console.log('final ')
    }
    
}


//gerará um erro
const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)
