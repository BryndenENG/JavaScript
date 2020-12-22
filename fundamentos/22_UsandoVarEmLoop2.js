const funcs = []

for(var i = 0; i < 10; i++)
{
    //serão armazenadas funções anonimas dentro do array acima 
    funcs.push(function()
    {
        console.log(i)
    })
}

//pelo fato de var não possuir escopo de função o valor retornado será o ultimo da variavel i ou seja 10
funcs[2]()
funcs[8]()