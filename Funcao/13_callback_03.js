//Exemplo de callback no browser - ser executado la 

document.getElementsByTagName('body')[0].onclick = function(e)
{
    console.log('O evento ocorreu')
}