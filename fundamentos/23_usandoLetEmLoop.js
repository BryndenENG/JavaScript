const funcs = []

for(let i = 0; i < 10; i++)
{
    funcs.push(function()
    {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//funções em JS tem "memoria" do local em que ela foi definida 